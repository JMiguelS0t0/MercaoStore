import {StyleSheet} from 'react-native';

const searchScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 200,
  },
  searchContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 10,
  },
  inputContainer: {
    backgroundColor: '#120b34',
    borderRadius: 10,
    borderColor: '#7b5bbd',
    borderWidth: 0.5,
    height: 50,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  card: {
    width: '41%',
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 0,
  },
  cardText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  offerCard: {
    width: '90%',
    backgroundColor: '#7b5bbd', 
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 0,
  },
  iconContainer: {
    marginBottom: 10,
  },
});

export default searchScreenStyles;
