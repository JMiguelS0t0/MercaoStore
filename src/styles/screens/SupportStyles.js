import {StyleSheet} from 'react-native';

const supportStyles = StyleSheet.create({
  container: {
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    marginBottom: 15,
    color: '#000',
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  iconStyle: {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    padding: 10,
    color: '#000',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    width: '100%',
    maxWidth: '95%',
    fontFamily: 'Poppins-Regular',
    borderColor: '#beb5c5',
  },
});

export default supportStyles;
