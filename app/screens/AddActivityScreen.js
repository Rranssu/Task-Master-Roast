import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Platform, 
  Alert 
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addActivityStyles } from '../styles/addActivityStyles';

export default function AddActivityScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [intensity, setIntensity] = useState('Simple'); // Default
  
  // Date Picker State
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [mode, setMode] = useState('date'); // 'date' or 'time'

  // Options for Intensity
  const intensities = ['Simple', 'Harsh', 'Roast'];

  // Handle Date Change
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Keep open on iOS, close on Android
    setDate(currentDate);
  };

  // Helper to open picker
  const showMode = (currentMode) => {
    setShowDatePicker(true);
    setMode(currentMode);
  };

  const handleAddTask = () => {
    if (!name.trim()) {
      Alert.alert('Missing Info', 'Please add a task name!');
      return;
    }

    const newTask = {
      name,
      description,
      date: date.toString(),
      intensity,
    };

    console.log("New Task Created:", newTask);
    Alert.alert('Success', `Added "${name}" with ${intensity} intensity!`);
    
    // Reset form (Optional)
    setName('');
    setDescription('');
    setIntensity('Simple');
    setDate(new Date());
  };

  return (
    <ScrollView style={addActivityStyles.container}>
      
      {/* 1. Name Input */}
      <Text style={addActivityStyles.label}>Activity Name</Text>
      <TextInput 
        style={addActivityStyles.input} 
        placeholder="e.g. Wake up at 5am" 
        value={name}
        onChangeText={setName}
      />

      {/* 2. Description Input */}
      <Text style={addActivityStyles.label}>Description</Text>
      <TextInput 
        style={[addActivityStyles.input, addActivityStyles.textArea]} 
        placeholder="Add details..." 
        multiline 
        numberOfLines={4} 
        value={description}
        onChangeText={setDescription}
      />

      {/* 3. Date & Time Selection */}
      <Text style={addActivityStyles.label}>Due Date & Time</Text>
      
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity 
          style={[addActivityStyles.dateButton, { flex: 1 }]} 
          onPress={() => showMode('date')}
        >
          <Text style={addActivityStyles.dateText}>
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[addActivityStyles.dateButton, { flex: 1 }]} 
          onPress={() => showMode('time')}
        >
          <Text style={addActivityStyles.dateText}>
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>
      </View>

      {/* The Actual Picker Component (Visible when triggered) */}
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}

      {/* 4. Intensity Selector */}
      <Text style={addActivityStyles.label}>Intensity Level</Text>
      <View style={addActivityStyles.intensityContainer}>
        {intensities.map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              addActivityStyles.intensityButton,
              intensity === level && addActivityStyles.selectedIntensity
            ]}
            onPress={() => setIntensity(level)}
          >
            <Text style={[
              addActivityStyles.intensityText,
              intensity === level && addActivityStyles.selectedIntensityText
            ]}>
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 5. Submit Button */}
      <TouchableOpacity style={addActivityStyles.submitButton} onPress={handleAddTask}>
        <Text style={addActivityStyles.submitText}>Create Activity</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}