import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';
import IconRow from '../../components/Payment/IconRow';
import ProductCard from './ProductCard';
import PricingDetails from './PricingDetail';
import {PaymentContext} from '../../context/PaymentContext';

const PaymentScreen = () => {
  const {cart} = useContext(PaymentContext);

  return (
    <View style={PaymentStyles.container}>
      <IconRow />

      <View style={PaymentStyles.containerDetails}>
        <ScrollView style={PaymentStyles.productList}>
          {cart.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollView>

        <PricingDetails />
      </View>
    </View>
  );
};

export default PaymentScreen;
