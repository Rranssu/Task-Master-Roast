import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userStyles } from '../styles/userStyles';

const UserProfileHeader = ({ user, onEdit }) => {
  return (
    <View style={userStyles.headerContainer}>
      <TouchableOpacity onPress={onEdit} style={userStyles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={userStyles.avatar} />
        <View style={userStyles.editBadge}>
          <Ionicons name="pencil" size={16} color="#fff" />
        </View>
      </TouchableOpacity>
      
      <Text style={userStyles.nameText}>{user.name}</Text>
      <Text style={userStyles.emailText}>{user.email}</Text>
    </View>
  );
};

export default UserProfileHeader;