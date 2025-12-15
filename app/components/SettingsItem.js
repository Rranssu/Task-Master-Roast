import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { settingsStyles } from '../styles/settingsStyles';
import { colors } from '../styles/colors';

const SettingsItem = ({ 
  icon, 
  iconColor, 
  label, 
  type = 'link', // 'link' or 'toggle'
  value, 
  onPress, 
  isLast 
}) => {
  return (
    <View>
      <TouchableOpacity 
        style={settingsStyles.row} 
        onPress={type === 'toggle' ? () => onPress(!value) : onPress}
        disabled={type === 'toggle'} // If toggle, the switch handles the press
      >
        {/* Icon Box */}
        <View style={[settingsStyles.rowIcon, { backgroundColor: iconColor + '20' }]}>
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>

        {/* Label */}
        <Text style={[
          settingsStyles.rowLabel, 
          label === 'Reset App Data' && settingsStyles.destructiveText
        ]}>
          {label}
        </Text>

        {/* Right Side Logic */}
        {type === 'toggle' ? (
          <Switch 
            value={value} 
            onValueChange={onPress}
            trackColor={{ false: "#767577", true: colors.primary }}
            thumbColor={value ? "#fff" : "#f4f3f4"}
          />
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {value && <Text style={settingsStyles.rowValue}>{value}</Text>}
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </View>
        )}
      </TouchableOpacity>
      
      {/* Separator Line (unless it's the last item) */}
      {!isLast && <View style={settingsStyles.rowSeparator} />}
    </View>
  );
};

export default SettingsItem;