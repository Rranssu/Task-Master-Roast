import React, { useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import TaskRow from '../components/TaskRow'; // Import the row component
import { tasksStyles } from '../styles/tasksStyles';

export default function TasksScreen() {
  // 1. Dummy Data (Since we haven't connected Context yet)
  const [tasks, setTasks] = useState([
    {
      id: '1',
      name: 'Drink Water',
      date: 'Dec 15, 2025 - 9:00 AM',
      intensity: 'Simple',
    },
    {
      id: '2',
      name: 'Finish Project Report',
      date: 'Dec 15, 2025 - 2:00 PM',
      intensity: 'Harsh',
    },
    {
      id: '3',
      name: 'Leg Workout',
      date: 'Dec 15, 2025 - 6:00 PM',
      intensity: 'Roast',
    },
  ]);

  // 2. Handle Completion (Simulate deleting/checking off)
  const handleComplete = (id) => {
    Alert.alert("Task Completed", "Great job!", [
      {
        text: "OK",
        onPress: () => {
          // Remove task from list
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        }
      }
    ]);
  };

  return (
    <View style={tasksStyles.container}>
      <Text style={tasksStyles.header}>Ongoing Tasks</Text>

      {tasks.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 50, color: 'gray' }}>
          No tasks left! Time to relax.
        </Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskRow item={item} onComplete={handleComplete} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}