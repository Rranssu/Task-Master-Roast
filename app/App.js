import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AuthScreen from './screens/AuthScreen';
import AppTabs from './components/AppTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* 1. Login Screen (First Screen) */}
        <Stack.Screen name="Login" component={AuthScreen} />

        {/* 2. Main App (Tabs) */}
        <Stack.Screen name="MainApp" component={AppTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}