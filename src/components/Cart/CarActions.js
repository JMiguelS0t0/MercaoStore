import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '@rneui/themed';
import CartStyles from '../../styles/screens/CartStyles';

const CartActions = ({quantity}) => (
  <View style={CartStyles.containerIcons}>
    <View style={CartStyles.quantityContainer}>
      <Icon
        name="trash"
        type="font-awesome-5"
        color="#fff"
        containerStyle={CartStyles.iconContainer}
        size={15}
      />
      <Text style={CartStyles.quantityText}>{quantity}</Text>
      <Icon
        name="plus"
        type="font-awesome-5"
        color="#fff"
        containerStyle={CartStyles.iconContainer}
        size={15}
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

export default CartActions;
