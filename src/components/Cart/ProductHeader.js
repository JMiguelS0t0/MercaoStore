import React from 'react';
import {View, Text} from 'react-native';
import CartStyles from '../../styles/screens/CartStyles';

const ProductHeader = ({title, price}) => (
  <View style={CartStyles.productHeader}>
    <Text style={CartStyles.productName}>{title}</Text>
    <Text style={CartStyles.productPrice}>{price}</Text>
  </View>
);

export default ProductHeader;
