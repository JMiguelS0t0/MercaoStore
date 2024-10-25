import React, {useContext, useMemo} from 'react';
import {View, ScrollView} from 'react-native';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';
import IconRow from '../../components/Payment/IconRow';
import ProductCard from './ProductCard';
import PricingDetails from './PricingDetail';
import {PaymentContext} from '../../context/PaymentContext';

const PaymentScreen = () => {
  const {cart} = useContext(PaymentContext);

  const memoizedProducts = useMemo(
    () =>
      cart.map(product => <ProductCard key={product.id} product={product} />),
    [cart],
  );

  return (
    <View style={PaymentStyles.container}>
      <IconRow />

      <View style={PaymentStyles.containerDetails}>
        <ScrollView style={PaymentStyles.productList}>
          {memoizedProducts}
        </ScrollView>

        <PricingDetails />
      </View>
    </View>
  );
};

export default PaymentScreen;
