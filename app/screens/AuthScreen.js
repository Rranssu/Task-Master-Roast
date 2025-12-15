import React from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import PromoCarousel from '../components/PromoCarousel';
import AuthForm from '../components/AuthForm';
import { authStyles } from '../styles/authStyles';

export default function AuthScreen({ navigation }) {
  
  const handleLoginSuccess = () => {
    // Navigate to the Main App (The Tabs)
    navigation.replace('MainApp');
  };

  return (
    <View style={authStyles.container}>
      {/* 
        KeyboardAvoidingView ensures the keyboard doesn't cover 
        the input fields on smaller screens 
      */}
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