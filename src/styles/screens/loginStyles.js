import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#120b34',
    paddingBottom: 5,
    margin: 0,
    marginTop: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#beb5c5',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  containerLogin: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    paddingBottom: 0,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonStyle: {
    backgroundColor: '#120b34',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  createText: {
    color: '#120b34',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default loginStyles;
