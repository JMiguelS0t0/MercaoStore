import {StyleSheet} from 'react-native';

const PaymentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
    padding: 8,
    borderRadius: 15,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
    backgroundColor: '#120b34',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  iconStyle: {
    backgroundColor: '#120b34',
    padding: 10,
    borderRadius: 10,
    width: '30%',
  },
  productList: {
    flex: 1,
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: 'column',
  },
  productCard: {
    borderWidth: 0,
    width: '90%',
    backgroundColor: '#7b5bbd',
    shadowColor: 'transparent',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    width: '50%',
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#7b5bbd',
    textAlign: 'right',
  },
  pricingContainer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#7b5bbd',
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  pricingLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  pricingValue: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#7b5bbd',
  },
  containerDetails: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#120b34',
    paddingBottom: 90,
  },
  backgroundImg: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 80,
    paddingVertical: 5,
  },
});

export default PaymentStyles;
