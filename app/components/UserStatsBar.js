import React from 'react';
import { View, Text } from 'react-native';
import { userStyles } from '../styles/userStyles';

const UserStatsBar = ({ stats }) => {
  return (
    <View style={userStyles.statsContainer}>
      <View style={userStyles.statBox}>
        <Text style={userStyles.statValue}>{stats.completed}</Text>
        <Text style={userStyles.statLabel}>Total Done</Text>
      </View>
      
      <View style={userStyles.verticalLine} />
      
      <View style={userStyles.statBox}>
        <Text style={userStyles.statValue}>{stats.streak} 🔥</Text>
        <Text style={userStyles.statLabel}>Day Streak</Text>
      </View>

      <View style={userStyles.verticalLine} />

      <View style={userStyles.statBox}>
        <Text style={userStyles.statValue}>{stats.level}</Text>
        <Text style={userStyles.statLabel}>Level</Text>
      </View>
    </View>
  );
};

export default UserStatsBar;