import React, {useContext} from 'react';
import {View, Image, Text} from 'react-native';
import ProductHeader from './ProductHeader';
import globalStyles from '../../styles/globalStyles';
import {ProductContext} from '../../context/ProductContext';
import CartActions from './CarActions';

const CartItem = ({item}) => {
  const {products} = useContext(ProductContext);

  const product = products.find(p => p.id === item.product);

  if (!product) {
    return null;
  }

  return (
    <View style={globalStyles.itemContainer}>
      <Image source={{uri: product.images}} style={globalStyles.productImage} />
      <View style={globalStyles.productInfoContainer}>
        <ProductHeader title={product.title} price={product.price} />
        <Text style={globalStyles.productQuantity}>
          Cantidad: {item.quantity}
        </Text>
        <CartActions item={{...product, quantity: item.quantity}} />
      </View>
    </View>
  );
};

export default CartItem;
