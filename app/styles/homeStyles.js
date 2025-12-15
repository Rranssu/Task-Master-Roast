import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg, // #f5f5f5
    padding: 20,
    paddingTop: 60,
  },
  
  // --- UPGRADED HEADER STYLES ---
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 12,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  greetingText: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  notificationBtn: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  // --- DASHBOARD GRID ---
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
    marginTop: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 13,
    color: 'gray',
    fontWeight: '500',
  },

  // --- NEW: NEXT TASK WIDGET ---
  nextTaskContainer: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  nextTaskLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  nextTaskTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nextTaskTime: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  // --- NEW: QUOTE WIDGET ---
  quoteContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
    marginTop: 5,
    marginBottom: 30, // Extra space at bottom
  },
  quoteText: {
    fontStyle: 'italic',
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  quoteAuthor: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary,
  },
});