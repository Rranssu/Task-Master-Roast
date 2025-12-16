import React, { useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import PromoCarousel from '../components/PromoCarousel';
import AuthForm from '../components/AuthForm';
import { authStyles } from '../styles/authStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../config/firebase';

export default function AuthScreen({ navigation }) {
  useEffect(() => {
    // Check for existing session on app start
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        // Optionally verify token with Firebase or backend
        navigation.replace('MainApp');
      }
    };
    checkAuth();
  }, []);

  const handleLoginSuccess = () => {
    // Navigate to the Main App (The Tabs)
    navigation.replace('MainApp');
  };

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
          {/* Top Component */}
          <PromoCarousel />
          
          {/* Bottom Component */}
          <AuthForm onLogin={handleLoginSuccess} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}