import React, {useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Icon} from '@rneui/themed';
import CartStyles from '../../styles/screens/CartStyles';
import {ProductContext} from '../../context/ProductContext';

const CartActions = ({item}) => {
  const {removeFromCart, updateQuantity, toggleFavorite, favorites} =
    useContext(ProductContext);

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

  const isFavorite = favorites.some(favItem => favItem.id === item.id);

  const handleToggleFavorite = () => {
    toggleFavorite(item);
  };

  return (
    <View style={CartStyles.containerIcons}>
      <View style={CartStyles.quantityContainer}>
        <Pressable onPress={handleMinus} style={CartStyles.iconContainer}>
          <Icon
            name={quantity > 1 ? 'minus' : 'trash'}
            type="font-awesome-5"
            color="#fff"
            size={15}
          />
        </Pressable>

        <Text style={CartStyles.quantityText}>{quantity}</Text>

        <Pressable onPress={handlePlus} style={CartStyles.iconContainer}>
          <Icon name="plus" type="font-awesome-5" color="#fff" size={15} />
        </Pressable>
      </View>

      <Pressable onPress={handleToggleFavorite} style={CartStyles.heartIcon}>
        <Icon
          name="heart"
          type="font-awesome-5"
          solid={isFavorite}
          color={isFavorite ? '#7b5bbd' : '#fff'}
          size={15}
        />
      </Pressable>
    </View>
  );
};

export default CartActions;
