import React, {useCallback} from 'react';
import {View, Pressable, Text} from 'react-native';
import {Icon} from '@rneui/themed';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';
import {useNavigation} from '@react-navigation/native';

const IconRow = ({selectedProduct}) => {
  const navigation = useNavigation();

  const handlePaymentMethodPress = useCallback(
    method => {
      console.log(`Selected payment method: ${method}`);
      navigation.navigate('PaymentForm', {product: selectedProduct});
    },
    [navigation, selectedProduct],
  );

  return (
    <View>
      <Text style={PaymentStyles.title}>Payment Methods</Text>

      <View style={PaymentStyles.iconRow}>
        <Pressable
          style={PaymentStyles.iconStyle}
          onPress={() => handlePaymentMethodPress('Credit Card')}>
          <Icon
            name="credit-card"
            type="font-awesome-5"
            color="#000"
            size={24}
          />
        </Pressable>

        <Pressable
          style={PaymentStyles.iconStyle}
          onPress={() => handlePaymentMethodPress('Paypal')}>
          <Icon name="paypal" type="font-awesome" color="#000" size={24} />
        </Pressable>

        <Pressable
          style={PaymentStyles.iconStyle}
          onPress={() => handlePaymentMethodPress('Apple Pay')}>
          <Icon name="apple-pay" type="font-awesome-5" color="#000" size={24} />
        </Pressable>
      </View>
    </View>
  );
};

export default IconRow;
