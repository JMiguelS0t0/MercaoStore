import React from 'react';
import {View} from 'react-native';
import {Icon} from '@rneui/themed';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';

const IconRow = () => {
  return (
    <View style={PaymentStyles.iconRow}>
      <Icon
        name="credit-card"
        type="font-awesome-5"
        color="#fff"
        size={24}
        containerStyle={PaymentStyles.iconStyle}
      />
      <Icon
        name="paypal"
        type="font-awesome"
        color="#fff"
        size={24}
        containerStyle={PaymentStyles.iconStyle}
      />
      <Icon
        name="apple-pay"
        type="font-awesome-5"
        color="#fff"
        size={24}
        containerStyle={PaymentStyles.iconStyle}
      />
    </View>
  );
};

export default IconRow;
