import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    paddingTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.text,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 8,
    marginLeft: 20,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
  },
  // Row Styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  rowSeparator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 50, // Indent separator to match text
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  rowLabel: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  rowValue: {
    fontSize: 16,
    color: 'gray',
    marginRight: 10,
  },
  // Specific for destructive actions
  destructiveText: {
    color: 'red',
  },
});