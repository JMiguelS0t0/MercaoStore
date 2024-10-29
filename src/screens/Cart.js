import React, {useContext, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import CartStyles from '../styles/screens/CartStyles';
import CartFooter from '../components/Cart/CartFooter';
import CartItem from '../components/Cart/CartItem';
import {ProductContext} from '../context/ProductContext';

const Cart = () => {
  const {cart} = useContext(ProductContext);

  const cartItems = Object.values(cart || {});

  const renderItem = useCallback(({item}) => <CartItem item={item} />, []);

  return (
    <View style={CartStyles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.product.toString()}
          contentContainerStyle={CartStyles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={CartStyles.emptyCartContainer}>
          <Text style={CartStyles.emptyCartText}>
            No hay productos en el carrito
          </Text>
        </View>
      )}
      {cartItems.length > 0 && <CartFooter />}
    </View>
  );
};

export default Cart;
