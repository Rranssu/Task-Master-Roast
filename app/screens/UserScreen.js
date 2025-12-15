import React from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { userStyles } from '../styles/userStyles';

// Import Modular Components
import UserProfileHeader from '../components/UserProfileHeader';
import UserStatsBar from '../components/UserStatsBar';
import ProfileMenuItem from '../components/ProfileMenuItem';

export default function UserScreen({ navigation }) {
  
  // 1. Mock Data
  const userInfo = {
    name: "Alex Johnson",
    email: "alex.j@example.com",
    avatar: "https://i.pravatar.cc/300?img=12",
    stats: {
      completed: 142,
      streak: 5,
      level: "Master"
    }
  };

  // 2. Handlers
  const handleEditProfile = () => Alert.alert("Edit", "Navigate to Edit Profile Screen");
  const handleChangePassword = () => Alert.alert("Security", "Navigate to Change Password");
  const handleHelp = () => Alert.alert("Support", "Opening Help Center...");
  
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => console.log("User logged out") }
    ]);
  };

  return (
    <View style={userStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Top Section: Avatar & Details */}
        <UserProfileHeader user={userInfo} onEdit={handleEditProfile} />

        {/* Middle Section: Stats */}
        <UserStatsBar stats={userInfo.stats} />

        {/* Menu Section 1: Account */}
        <Text style={userStyles.sectionTitle}>Account</Text>
        <View style={userStyles.menuContainer}>
          <ProfileMenuItem 
            icon="person-outline" 
            label="Edit Profile" 
            onPress={handleEditProfile} 
          />
          <ProfileMenuItem 
            icon="lock-closed-outline" 
            label="Change Password" 
            onPress={handleChangePassword} 
            isLast={true}
          />
        </View>

        {/* Menu Section 2: App & Support */}
        <Text style={userStyles.sectionTitle}>Support</Text>
        <View style={userStyles.menuContainer}>
          <ProfileMenuItem 
            icon="help-buoy-outline" 
            label="Help & FAQ" 
            onPress={handleHelp} 
          />
          <ProfileMenuItem 
            icon="document-text-outline" 
            label="Terms & Privacy" 
            onPress={() => {}} 
            isLast={true}
          />
        </View>

        {/* Menu Section 3: Danger Zone */}
        <Text style={userStyles.sectionTitle}>Actions</Text>
        <View style={userStyles.menuContainer}>
          <ProfileMenuItem 
            icon="log-out-outline" 
            label="Log Out" 
            onPress={handleLogout} 
            isLast={true}
            isDestructive={true}
          />
        </View>

      </ScrollView>
    </View>
  );
}