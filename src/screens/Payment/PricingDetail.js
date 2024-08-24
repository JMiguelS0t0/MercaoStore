import React from 'react';
import {View, Text} from 'react-native';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';

const PricingDetails = () => {
  return (
    <View style={PaymentStyles.pricingContainer}>
      <View style={PaymentStyles.pricingRow}>
        <Text style={PaymentStyles.pricingLabel}>Subtotal:</Text>
        <Text style={PaymentStyles.pricingValue}>US$ 625,00</Text>
      </View>
      <View style={PaymentStyles.pricingRow}>
        <Text style={PaymentStyles.pricingLabel}>Shipping:</Text>
        <Text style={PaymentStyles.pricingValue}>US$ 15,00</Text>
      </View>
      <View style={PaymentStyles.pricingRow}>
        <Text style={PaymentStyles.pricingLabel}>Total:</Text>
        <Text style={PaymentStyles.pricingValue}>US$ 640,00</Text>
      </View>
    </View>
  );
};

export default PricingDetails;
