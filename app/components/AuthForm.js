import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { authStyles } from '../styles/authStyles';
import { auth } from '../config/firebase'; // Your Firebase config file
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const AuthForm = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Email/Password Auth Handler
  const handleEmailAuth = async () => {
    if (!email || !password || (isRegister && !name)) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      let userCredential;
      if (isRegister) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      // Get ID token and send to backend
      const idToken = await userCredential.user.getIdToken();
      const endpoint = isRegister ? '/api/auth/signup' : '/api/auth/login';
      const response = await fetch(`http://localhost:3000${endpoint}`, { // Update to your server URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, ...(isRegister && { name }) }), // Include name for signup
      });

      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('userToken', idToken); // Store token for session
        onLogin(); // Navigate to main app
      } else {
        setError(data.error || 'Authentication failed.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      const redirectUri = AuthSession.makeRedirectUri({
        useProxy: true, // For Expo Go; set to false for standalone apps
      });

      const request = new AuthSession.AuthRequest({
        clientId: 'your-google-client-id.apps.googleusercontent.com', // From Google Cloud Console
        scopes: ['openid', 'profile', 'email'],
        responseType: AuthSession.ResponseType.Token,
        redirectUri,
        additionalParameters: {},
        prompt: AuthSession.Prompt.SelectAccount,
      });

      const result = await request.promptAsync({
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      });

      if (result.type === 'success') {
        const { access_token } = result.params;
        const credential = GoogleAuthProvider.credential(null, access_token);
        const userCredential = await signInWithCredential(auth, credential);

        // Get ID token and send to backend
        const idToken = await userCredential.user.getIdToken();
        const response = await fetch('http://localhost:3000/api/auth/google', { // Update to your server URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken }),
        });

        const data = await response.json();
        if (response.ok) {
          await AsyncStorage.setItem('userToken', idToken); // Store token
          onLogin(); // Navigate to main app
        } else {
          setError('Google login failed: ' + data.error);
        }
      } else {
        setError('Google sign-in was cancelled.');
      }
    } catch (error) {
      setError('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={authStyles.formContainer}>
      <Text style={authStyles.title}>
        {isRegister ? 'Create Account' : 'Welcome Back'}
      </Text>
      <Text style={authStyles.subtitle}>
        {isRegister ? 'Sign up to start roasting your tasks.' : 'Login to continue your streak.'}
      </Text>

      {/* Error Message */}
      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

      {/* Inputs */}
      {isRegister && (
        <TextInput 
          style={authStyles.input} 
          placeholder="Full Name" 
          value={name}
          onChangeText={setName}
        />
      )}
      
      <TextInput 
        style={authStyles.input} 
        placeholder="Email Address" 
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput 
        style={authStyles.input} 
        placeholder="Password" 
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Main Button */}
      <TouchableOpacity style={authStyles.button} onPress={handleEmailAuth} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : (
          <Text style={authStyles.buttonText}>
            {isRegister ? 'Sign Up' : 'Log In'}
          </Text>
        )}
      </TouchableOpacity>

      {/* Google Sign-In Button */}
      <TouchableOpacity style={[authStyles.button, { backgroundColor: '#4285F4', marginTop: 10 }]} onPress={handleGoogleSignIn} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : (
          <Text style={authStyles.buttonText}>Sign In with Google</Text>
        )}
      </TouchableOpacity>

      {/* Toggle Link */}
      <View style={authStyles.toggleContainer}>
        <Text style={authStyles.toggleText}>
          {isRegister ? 'Already have an account? ' : "Don't have an account? "}
        </Text>
        <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
          <Text style={authStyles.linkText}>
            {isRegister ? 'Log In' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthForm;