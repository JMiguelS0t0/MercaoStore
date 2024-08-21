import React from 'react';
import {View, Image} from 'react-native';
import CartStyles from '../../styles/screens/CartStyles';
import CartActions from './CarActions';
import ProductHeader from './ProductHeader';

const CartItem = ({item}) => {
  return (
    <View style={CartStyles.itemContainer}>
      <Image source={item.image} style={CartStyles.productImage} />

      <View style={CartStyles.productInfoContainer}>
        <ProductHeader title={item.title} price={item.price} />
        <CartActions quantity={1} />
      </View>
    </View>
  );
};

export default CartItem;
