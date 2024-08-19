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
    fontSize: 18,
  },
  registerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 5,
    margin: 0,
  },
  borderButton: {
    backgroundColor: '#7b5bbd',
  },
});

export default registerFormStyles;
