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
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#beb5c5',
    borderWidth: 1,
    height: 50,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
  text: {
    fontSize: 20,
    color: '#000',
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
  button: {
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  offerButton: {
    width: '90%',
    backgroundColor: '#7353b6',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    marginTop: 20,
    paddingHorizontal: '30%',
    flexDirection: 'column',
  },
});

export default searchScreenStyles;
