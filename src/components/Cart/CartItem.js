import React from 'react';
import {View, Image} from 'react-native';
import CartActions from './CarActions';
import ProductHeader from './ProductHeader';
import globalStyles from '../../styles/globalStyles';

const CartItem = ({item}) => {
  return (
    <View style={globalStyles.itemContainer}>
      <Image source={item.image} style={globalStyles.productImage} />

      <View style={globalStyles.productInfoContainer}>
        <ProductHeader title={item.title} price={item.price} />
        <CartActions quantity={1} />
      </View>
    </View>
  );
};

export default CartItem;
