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
    marginLeft: '10%',
    padding: 0,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#beb5c5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 1,
  },
  buttonStyle: {
    backgroundColor: '#120b34',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontFamily: 'Poppins-Bold',
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
  backgroundInput: {
    backgroundColor: '#120b34',
  },
  borderButton: {
    backgroundColor: '#7b5bbd',
  },
  inputStyles: {
    borderColor: '#7b5bbd',
  },
  avatar: {
    backgroundColor: '#ccc',
    marginBottom: 15,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#120b34',
    borderRadius: 20,
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  productName: {
    color: '#fff',
    fontSize: 16,
    maxWidth: '50%',
    fontFamily: 'Poppins-Bold',
  },
  productPrice: {
    color: '#fff',
    fontSize: 16,
    maxWidth: '50%',
    fontFamily: 'Poppins-Regular',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    width: '40%',
    height: 120,
    borderRadius: 15,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  dividerStyle: {
    marginVertical: 8,
    color: 'rgba(255, 255, 255, 0.1)',
  },
});
export default globalStyles;
