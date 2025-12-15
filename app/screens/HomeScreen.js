import React from 'react';
import { View, ScrollView } from 'react-native';
import { homeStyles } from '../styles/homeStyles';

// Import Components
import HomeHeader from '../components/HomeHeader';
import SummaryCards from '../components/SummaryCards';
import NextTaskCard from '../components/NextTaskCard';
import QuoteBlock from '../components/QuoteBlock';

export default function HomeScreen() {
  // Mock Data
  const userData = {
    name: "Alex",
    pending: 5,
    completed: 12,
    roasts: 2
  };

  const nextTask = {
    name: "Meeting with Client",
    time: "10:00 AM",
    intensity: "Harsh"
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView contentContainerStyle={homeStyles.container} showsVerticalScrollIndicator={false}>
        
        {/* 1. Header */}
        <HomeHeader username={userData.name} />

        {/* 2. Highlighted Next Task */}
        <NextTaskCard 
          taskName={nextTask.name} 
          time={nextTask.time} 
          intensity={nextTask.intensity} 
        />

        {/* 3. Dashboard Stats */}
        <SummaryCards 
          tasksPending={userData.pending} 
          tasksDone={userData.completed} 
          roastCount={userData.roasts} 
        />

        {/* 4. Daily Quote */}
        <QuoteBlock />

      </ScrollView>
    </View>
  );
}