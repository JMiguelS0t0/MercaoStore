import React from 'react';
import {View, Image} from 'react-native';
import ProductHeader from './ProductHeader';
import globalStyles from '../../styles/globalStyles';
import CartActions from './CarActions';

const CartItem = ({item}) => {
  if (!item) {
    return null;
  }

  return (
    <View style={globalStyles.itemContainer}>
      <Image source={item.image} style={globalStyles.productImage} />
      <View style={globalStyles.productInfoContainer}>
        <ProductHeader title={item.title} price={item.price} />
        <CartActions item={item} />
      </View>
    </View>
  );
};

export default CartItem;
