import React from 'react';
import { View, Text } from 'react-native';
import { homeStyles } from '../styles/homeStyles';
import { colors } from '../styles/colors';

const SummaryCards = ({ tasksPending, tasksDone, roastCount }) => {
  return (
    <View>
      <Text style={homeStyles.sectionTitle}>Dashboard Summary</Text>
      
      <View style={homeStyles.cardsContainer}>
        {/* Card 1: Pending */}
        <View style={homeStyles.card}>
          <Text style={[homeStyles.cardValue, { color: colors.primary }]}>
            {tasksPending}
          </Text>
          <Text style={homeStyles.cardLabel}>Tasks Left</Text>
        </View>

        {/* Card 2: Completed */}
        <View style={homeStyles.card}>
          <Text style={[homeStyles.cardValue, { color: 'green' }]}>
            {tasksDone}
          </Text>
          <Text style={homeStyles.cardLabel}>Completed</Text>
        </View>

        {/* Card 3: Intensity */}
        <View style={[homeStyles.card, { width: '100%' }]}> 
          <Text style={[homeStyles.cardValue, { color: 'red' }]}>
            {roastCount} 🔥
          </Text>
          <Text style={homeStyles.cardLabel}>Roast Tasks Pending</Text>
        </View>
      </View>
    </View>
  );
};

export default SummaryCards;