import React from 'react';
import {View, Text} from 'react-native';
import {Card} from '@rneui/themed';
import PaymentStyles from '../../styles/screens/Payment/PaymentStyles';

const ProductCard = ({product, quantity}) => {
  if (!product) return null;

  const price = product.onOffer ? product.offerPrice : product.price;
  const total = price * quantity;

  return (
    <Card containerStyle={PaymentStyles.productCard}>
      <View style={PaymentStyles.productRow}>
        <View style={PaymentStyles.backgroundImg}>
          <Card.Image
            source={{uri: product.images}}
            style={PaymentStyles.productImage}
            resizeMode="contain"
          />
        </View>
        <View style={PaymentStyles.productInfoContainer}>
          <Text style={PaymentStyles.productTitle}>{product.title}</Text>
          <Text style={PaymentStyles.productPrice}>
            ${price} x {quantity}
          </Text>
          <Text style={PaymentStyles.productTotal}>
            Total: ${total.toFixed(2)}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default React.memo(ProductCard);
