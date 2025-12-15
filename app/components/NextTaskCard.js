import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles/homeStyles';

const NextTaskCard = ({ taskName, time, intensity }) => {
  return (
    <View>
      <Text style={homeStyles.sectionTitle}>Up Next</Text>
      <TouchableOpacity style={homeStyles.nextTaskContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start' }}>
          <View>
            <Text style={homeStyles.nextTaskLabel}>Priority: {intensity}</Text>
            <Text style={homeStyles.nextTaskTitle}>{taskName}</Text>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <Ionicons name="time-outline" size={18} color="white" style={{ marginRight: 5 }} />
              <Text style={homeStyles.nextTaskTime}>{time}</Text>
            </View>
          </View>
          
          <Ionicons name="arrow-forward-circle" size={40} color="white" style={{ opacity: 0.8 }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NextTaskCard;