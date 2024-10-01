import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Icon} from '@rneui/themed';
import CartStyles from '../../styles/screens/CartStyles';
import {ProductContext} from '../../context/ProductContext';

const CartActions = ({item}) => {
  const {removeFromCart, updateQuantity} = useContext(ProductContext);

  if (!item) {
    return null;
  }

  const quantity = item.quantity || 1;

  const handleMinus = () => {
    if (quantity > 1) {
      updateQuantity(item, quantity - 1);
    } else {
      removeFromCart(item);
    }
  };

  const handlePlus = () => {
    updateQuantity(item, quantity + 1);
  };

  return (
    <View style={CartStyles.containerIcons}>
      <View style={CartStyles.quantityContainer}>
        <Icon
          name={quantity > 1 ? 'minus' : 'trash'}
          type="font-awesome-5"
          color="#fff"
          containerStyle={CartStyles.iconContainer}
          size={15}
          onPress={handleMinus}
        />
        <Text style={CartStyles.quantityText}>{quantity}</Text>
        <Icon
          name="plus"
          type="font-awesome-5"
          color="#fff"
          containerStyle={CartStyles.iconContainer}
          size={15}
          onPress={handlePlus}
        />
      </View>
      <Icon
        name="heart"
        type="font-awesome-5"
        color="#fff"
        size={15}
        containerStyle={CartStyles.heartIcon}
      />
    </View>
  );
};

export default CartActions;
