const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Firebase Client SDK (for auth routes)
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

// Firebase Admin SDK (for token verification and Firestore)
const admin = require('firebase-admin');

// Initialize Firebase Client (load from .env or hardcode)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Firebase Admin (load from key.json)
if (!admin.apps.length) {
  const serviceAccount = require('./key/key.json'); // Path to your key.json
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Express App Setup
const server = express();
const PORT = process.env.PORT || 3000;

// Middleware
server.use(cors());
server.use(bodyParser.json());

// Utility: Roast Generator
const roasts = [
  "Oops, looks like your task is ghosting you. Better luck next time!",
  "Missed it again? Maybe it's time to set a reminder... or just give up?",
  "Your task is probably laughing at you right now. Get it together!",
  "Procrastination level: Expert. Task completion level: Zero.",
  "If tasks were people, this one would have blocked you by now.",
];
function generateRoast(missedCount) {
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  return `You've missed ${missedCount} task(s). ${randomRoast}`;
}

// Routes: Auth
server.post('/api/auth/signup', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Store additional user data in Firestore
    await admin.firestore().collection('users').doc(userCredential.user.uid).set({
      email,
      name,
      provider: 'email',
      createdAt: new Date(),
    });
    res.status(201).json({ uid: userCredential.user.uid, message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    res.status(200).json({ uid: userCredential.user.uid, message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.post('/api/auth/google', async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const email = decodedToken.email;
    const name = decodedToken.name || 'Google User';

    // Check/create user in Firestore
    const userDoc = await admin.firestore().collection('users').doc(uid).get();
    if (!userDoc.exists) {
      await admin.firestore().collection('users').doc(uid).set({
        email,
        name,
        provider: 'google',
        createdAt: new Date(),
      });
    }

    res.status(200).json({ uid, email, name, message: 'Google login successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Routes: Tasks
server.post('/api/tasks', async (req, res) => {
  const { uid, title, description, dueDate } = req.body;
  try {
    const docRef = await admin.firestore().collection('tasks').add({
      uid,
      title,
      description,
      dueDate: new Date(dueDate),
      completed: false,
      createdAt: new Date(),
    });
    res.status(201).json({ id: docRef.id, message: 'Task created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.get('/api/tasks/:uid', async (req, res) => {
  const { uid } = req.params;
  try {
    const q = admin.firestore().collection('tasks').where('uid', '==', uid);
    const querySnapshot = await q.get();
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    await admin.firestore().collection('tasks').doc(id).update(updates);
    res.status(200).json({ message: 'Task updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await admin.firestore().collection('tasks').doc(id).delete();
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.get('/api/tasks/roast/:uid', async (req, res) => {
  const { uid } = req.params;
  try {
    const q = admin.firestore().collection('tasks').where('uid', '==', uid).where('completed', '==', false);
    const querySnapshot = await q.get();
    const missedTasks = [];
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      if (new Date(task.dueDate.toDate()) < new Date()) { // Firestore timestamps
        missedTasks.push(task);
      }
    });
    if (missedTasks.length > 0) {
      const roast = generateRoast(missedTasks.length);
      res.status(200).json({ roast, missedCount: missedTasks.length });
    } else {
      res.status(200).json({ roast: 'Great job! No missed tasks today.', missedCount: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health Check
server.get('/', (req, res) => res.send('Task Manager Backend is running!'));

// Start Server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});