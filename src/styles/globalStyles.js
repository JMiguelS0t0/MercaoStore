import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: '4%',
  },

  smallLogo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginLeft: '5%',
    padding: 0,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#beb5c5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: '#120b34',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  containerForm: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
export default globalStyles;
