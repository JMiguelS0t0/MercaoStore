import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';
import IconRow from '../../components/Payment/IconRow';
import {PaymentContext} from '../../context/PaymentContext';
import ProductCard from './ProductCard';
import PricingDetails from './PricingDetail';

const PaymentScreen = () => {
  const {cart, getProductDetails} = useContext(PaymentContext);

  const renderProducts = () => {
    return Object.entries(cart).map(([productId, {quantity}]) => {
      const product = getProductDetails(productId);
      return (
        <ProductCard key={productId} product={product} quantity={quantity} />
      );
    });
  };

  return (
    <View style={PaymentStyles.container}>
      <IconRow />
      <View style={PaymentStyles.containerDetails}>
        <ScrollView style={PaymentStyles.productList}>
          {renderProducts()}
        </ScrollView>
        <PricingDetails />
      </View>
    </View>
  );
};

export default PaymentScreen;
