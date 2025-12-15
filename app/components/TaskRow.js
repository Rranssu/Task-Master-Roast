import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tasksStyles } from '../styles/tasksStyles';
import { colors } from '../styles/colors';

const TaskRow = ({ item, onComplete }) => {
  
  // 1. Logic to determine Emoji based on intensity
  const getEmoji = (intensity) => {
    switch (intensity) {
      case 'Simple': return '🙂'; // Happy
      case 'Harsh': return '😠';  // Mad
      case 'Roast': return '🔥';  // Fire
      default: return '🙂';
    }
  };

  return (
    <View style={tasksStyles.row}>
      {/* Left: Emoji */}
      <View style={tasksStyles.emojiContainer}>
        <Text style={tasksStyles.emoji}>{getEmoji(item.intensity)}</Text>
      </View>

      {/* Middle: Name & Date */}
      <View style={tasksStyles.textContainer}>
        <Text style={tasksStyles.taskName}>{item.name}</Text>
        <Text style={tasksStyles.taskDate}>{item.date}</Text>
      </View>

      {/* Right: Check Button */}
      <TouchableOpacity 
        style={tasksStyles.checkButton} 
        onPress={() => onComplete(item.id)}
      >
        <Ionicons name="ellipse-outline" size={28} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskRow;