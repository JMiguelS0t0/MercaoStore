import React from 'react';
import {View, Text} from 'react-native';
import {Card} from '@rneui/themed';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';

const ProductCard = ({product}) => {
  return (
    <Card containerStyle={PaymentStyles.productCard}>
      <View style={PaymentStyles.productRow}>
        <View style={PaymentStyles.backgroundImg}>
          <Card.Image
            source={product.image}
            style={PaymentStyles.productImage}
          />
        </View>
        <View style={PaymentStyles.productInfoContainer}>
          <Text style={PaymentStyles.productTitle}>{product.title}</Text>
          <Text style={PaymentStyles.productPrice}>{product.price}</Text>
        </View>
      </View>
    </Card>
  );
};

export default ProductCard;
