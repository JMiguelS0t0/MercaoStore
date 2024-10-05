import {StyleSheet} from 'react-native';

const signInFormStyles = StyleSheet.create({
  loginText: {
    fontSize: 24,
    color: '#120b34',
    paddingBottom: 5,
    margin: 0,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
  colorForm: {
    backgroundColor: '#fff',
  },
  createText: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
  },
  createTextHighlight: {
    color: '#7b5bbd',
    fontFamily: 'Poppins-Bold',
    marginTop: 0,
  },
  createAccountButton: {
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  errorStyle: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
  },
});

export default signInFormStyles;
