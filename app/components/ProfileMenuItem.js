import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userStyles } from '../styles/userStyles';
import { colors } from '../styles/colors';

const ProfileMenuItem = ({ icon, label, onPress, isLast, isDestructive }) => {
  return (
    <TouchableOpacity 
      style={[userStyles.menuItem, isLast && userStyles.lastItem]} 
      onPress={onPress}
    >
      <Ionicons 
        name={icon} 
        size={22} 
        color={isDestructive ? 'red' : colors.primary} 
      />
      <Text style={[
        userStyles.menuItemText, 
        isDestructive && { color: 'red', fontWeight: 'bold' }
      ]}>
        {label}
      </Text>
      <Ionicons name="chevron-forward" size={20} color="#ccc" />
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;