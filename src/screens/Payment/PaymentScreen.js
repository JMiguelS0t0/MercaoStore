import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';
import CustomInput from '../../reusable/CustomInput';
import IconRow from './IconRow';
import ProductCard from './ProductCard';
import PricingDetails from './PricingDetail';

const productData = [
  {
    id: 1,
    title: 'iPhone 13',
    price: 'US$ 600,00',
    image: require('../../assets/Iphone.webp'),
  },
  {
    id: 2,
    title: 'Case iPhone',
    price: 'US$ 25,00',
    image: require('../../assets/CaseIphone.webp'),
  },
];

const PaymentScreen = () => {
  return (
    <View style={PaymentStyles.container}>
      <Text style={PaymentStyles.title}>Payment details</Text>

      <CustomInput
        placeholder="Enter your address"
        iconName="map-marker-alt"
        containerStyle={PaymentStyles.inputContainer}
      />

      <IconRow />

      <View style={PaymentStyles.containerDetails}>
        <ScrollView style={PaymentStyles.productList}>
          {productData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollView>

        <PricingDetails />
      </View>
    </View>
  );
};

export default PaymentScreen;
