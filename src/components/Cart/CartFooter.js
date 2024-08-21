import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import globalStyles from '../../styles/globalStyles';
import CartStyles from '../../styles/screens/CartStyles';

const CartFooter = () => {
  return (
    <View style={CartStyles.footerContainer}>
      <View style={CartStyles.subtotalContainer}>
        <Text style={CartStyles.subtotalText}>Subtotal</Text>
        <Text style={CartStyles.subtotalPrice}>US$ 49,00</Text>
      </View>
      <Button
        title="Continue to checkout"
        buttonStyle={[globalStyles.buttonStyle, CartStyles.checkoutButton]}
      />
    </View>
  );
};

export default CartFooter;
