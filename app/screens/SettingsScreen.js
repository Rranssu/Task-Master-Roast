import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { settingsStyles } from '../styles/settingsStyles';
import SettingsItem from '../components/SettingsItem';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleClearData = () => {
    // UI Only
    Alert.alert(
      "Reset App Data",
      "This is a UI Demo. No actual data to delete.",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.header}>Settings</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Preferences */}
        <Text style={settingsStyles.sectionHeader}>Preferences</Text>
        <View style={settingsStyles.sectionContainer}>
          <SettingsItem 
            icon="moon" 
            iconColor="#5856D6" 
            label="Dark Mode" 
            type="toggle"
            value={isDarkMode}
            onPress={setIsDarkMode}
          />
          <SettingsItem 
            icon="notifications" 
            iconColor="#FF9500" 
            label="Notifications" 
            type="toggle"
            value={notifications}
            onPress={setNotifications}
            isLast
          />
        </View>

        {/* Data */}
        <Text style={settingsStyles.sectionHeader}>Data</Text>
        <View style={settingsStyles.sectionContainer}>
          <SettingsItem 
            icon="trash" 
            iconColor="#FF3B30" 
            label="Reset App Data" 
            onPress={handleClearData}
            isLast
          />
        </View>
      </ScrollView>
    </View>
  );
}