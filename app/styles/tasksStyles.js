import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const tasksStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  // Row Styles
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    // Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emojiContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  emoji: {
    fontSize: 28,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  taskDate: {
    fontSize: 12,
    color: 'gray',
  },
  checkButton: {
    padding: 10,
  },
});