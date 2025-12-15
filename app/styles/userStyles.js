import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const userStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
  },
  // Header
  headerContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },
  emailText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  
  // Stats Bar
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#eee',
    height: '80%',
  },

  // Menu Items
  sectionTitle: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 10,
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  menuItemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: colors.text,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});