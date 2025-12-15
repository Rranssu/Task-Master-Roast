import React from 'react';
import { View, Text } from 'react-native';
import { homeStyles } from '../styles/homeStyles';

const QuoteBlock = () => {
  return (
    <View>
      <Text style={homeStyles.sectionTitle}>Daily Motivation</Text>
      <View style={homeStyles.quoteContainer}>
        <Text style={homeStyles.quoteText}>
          "The only way to do great work is to love what you do."
        </Text>
        <Text style={homeStyles.quoteAuthor}>- Steve Jobs</Text>
      </View>
    </View>
  );
};

export default QuoteBlock;