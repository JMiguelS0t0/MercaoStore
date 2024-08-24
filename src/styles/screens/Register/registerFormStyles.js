import {StyleSheet} from 'react-native';

const registerFormStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  registerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 5,
    margin: 0,
  },
  backButton: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    padding: 0,
  },
  backButtonText: {
    marginLeft: 10,
    paddingVertical: 6,
  },
});

export default registerFormStyles;
