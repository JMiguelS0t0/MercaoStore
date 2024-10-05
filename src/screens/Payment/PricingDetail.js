// src/components/PricingDetails.js
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';
import {PaymentContext} from '../../context/PaymentContext';

const PricingDetails = () => {
  const {subtotal, shipping, total} = useContext(PaymentContext);

  return (
    <View style={PaymentStyles.pricingContainer}>
      <View style={PaymentStyles.pricingRow}>
        <Text style={PaymentStyles.pricingLabel}>Subtotal:</Text>
        <Text style={PaymentStyles.pricingValue}>
          US$ {subtotal.toFixed(2)}
        </Text>
      </View>
      <View style={PaymentStyles.pricingRow}>
        <Text style={PaymentStyles.pricingLabel}>Shipping:</Text>
        <Text style={PaymentStyles.pricingValue}>
          US$ {shipping.toFixed(2)}
        </Text>
      </View>
      <View style={PaymentStyles.pricingRow}>
        <Text style={PaymentStyles.pricingLabel}>Total:</Text>
        <Text style={PaymentStyles.pricingValue}>US$ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default PricingDetails;
