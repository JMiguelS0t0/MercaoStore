import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';
import CartStyles from '../../styles/screens/CartStyles';
import {ProductContext} from '../../context/ProductContext';

const CartFooter = () => {
  const {cartSubtotal} = useContext(ProductContext);
  const navigation = useNavigation();

  const handleCheckout = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={CartStyles.footerContainer}>
      <View style={CartStyles.subtotalContainer}>
        <Text style={CartStyles.subtotalText}>Subtotal</Text>
        <Text style={CartStyles.subtotalPrice}>
          US$ {(cartSubtotal ?? 0).toFixed(2)}
        </Text>
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
