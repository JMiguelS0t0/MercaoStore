import React, {useContext, useMemo} from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';
import CartStyles from '../../styles/screens/CartStyles';
import {ProductContext} from '../../context/ProductContext';

const CartFooter = () => {
  const {cart, products} = useContext(ProductContext);
  const navigation = useNavigation();

  const subtotal = useMemo(() => {
    return Object.values(cart).reduce((total, item) => {
      const product = products.find(p => p.id === item.product);
      const price = product?.onOffer ? product.offerPrice : product?.price;
      return total + (price || 0) * item.quantity;
    }, 0);
  }, [cart, products]);

  const handleCheckout = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={CartStyles.footerContainer}>
      <View style={CartStyles.subtotalContainer}>
        <Text style={CartStyles.subtotalText}>Subtotal</Text>
        <Text style={CartStyles.subtotalPrice}>US$ {subtotal.toFixed(2)}</Text>
      </View>
      <Button
        title="Continue to checkout"
        buttonStyle={[globalStyles.buttonStyle, CartStyles.checkoutButton]}
        onPress={handleCheckout}
      />
    </View>
  );
};

export default CartFooter;
