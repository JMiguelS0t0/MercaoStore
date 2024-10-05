import React from 'react';
import {View} from 'react-native';
import CardContent from './CardContent';
import CardStyles from '../../styles/components/cardStyles';

const CardItem = ({item}) => {
  return (
    <View style={CardStyles.cardWrapper}>
      <CardContent item={item} />
    </View>
  );
};

export default CardItem;
