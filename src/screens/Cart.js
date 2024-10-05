import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import CartStyles from '../styles/screens/CartStyles';
import CartFooter from '../components/Cart/CartFooter';
import CartItem from '../components/Cart/CartItem';
import {ProductContext} from '../context/ProductContext';

const Cart = () => {
  const {cart} = useContext(ProductContext);

  const renderItem = ({item}) => <CartItem item={item} />;

  return (
    <View style={CartStyles.container}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
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
      {cart.length > 0 && <CartFooter />}
    </View>
  );
};

export default Cart;
