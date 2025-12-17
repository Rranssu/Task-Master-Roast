import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { authStyles } from '../styles/authStyles';

const AuthForm = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    // In a real app, you would validate backend here
    // For now, we just pass control back to the screen
    onLogin();
  };

  return (
    <View style={authStyles.formContainer}>
      <Text style={authStyles.title}>
        {isRegister ? 'Create Account' : 'Welcome Back'}
      </Text>
      <Text style={authStyles.subtitle}>
        {isRegister ? 'Sign up to start roasting your tasks.' : 'Login to continue your streak.'}
      </Text>

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
      <TouchableOpacity style={authStyles.button} onPress={handleSubmit}>
        <Text style={authStyles.buttonText}>
          {isRegister ? 'Sign Up' : 'Log In'}
        </Text>
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