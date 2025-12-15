import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles/homeStyles';
import { colors } from '../styles/colors';

const HomeHeader = ({ username }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <View style={homeStyles.headerWrapper}>
      {/* Left Side: Profile & Text */}
      <View style={homeStyles.userInfo}>
        <Image 
          source={{ uri: 'https://i.pravatar.cc/300' }} 
          style={homeStyles.profileImage}
        />
        <View>
          <Text style={homeStyles.greetingText}>{getGreeting()},</Text>
          <Text style={homeStyles.usernameText}>{username}</Text>
        </View>
      </View>

      {/* Right Side: Notification Bell */}
      <TouchableOpacity style={homeStyles.notificationBtn}>
        <Ionicons name="notifications-outline" size={24} color={colors.text} />
        {/* Optional: Red Dot for updates */}
        <View style={{
          position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: 'red'
        }} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;