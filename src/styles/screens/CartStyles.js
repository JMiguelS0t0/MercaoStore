import {StyleSheet} from 'react-native';

const CartStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 85,
  },
  listContainer: {
    paddingBottom: 180,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#120b34',
    borderRadius: 20,
  },
  productImage: {
    width: '40%',
    height: 120,
    borderRadius: 15,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    color: '#000',
    fontSize: 16,
    maxWidth: '50%',
    fontFamily: 'Poppins-Bold',
  },
  productText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  productPrice: {
    color: '#000',
    fontSize: 16,
    maxWidth: '50%',
    fontFamily: 'Poppins-Regular',
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(123, 91, 189, 0.9)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '60%',
  },
  quantityText: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  subtotalText: {
    color: '#000',
    fontSize: 16,
  },
  subtotalPrice: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#7b5bbd',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  heartIcon: {
    backgroundColor: 'rgba(123, 91, 189, 0.5)',
    borderRadius: 15,
    padding: 8,
    marginLeft: 'auto',
  },
  footerContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 80,
  },
});

export default CartStyles;
