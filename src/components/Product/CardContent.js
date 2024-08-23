import React from 'react';
import {Card, Text, Icon} from '@rneui/themed';
import CardStyles from '../../styles/components/cardStyles';
import {View} from 'react-native';

const CardContent = ({item}) => {
  return (
    <Card containerStyle={CardStyles.cardContainer}>
      <View style={CardStyles.imageContainer}>
        <Card.Image
          source={item.image}
          style={CardStyles.cardImage}
          resizeMode="contain"
        />
        <Icon
          name="heart"
          type="font-awesome-5"
          color="#fff"
          size={15}
          containerStyle={CardStyles.heartIcon}
        />
      </View>
      <Text style={CardStyles.cardTitle}>{item.title}</Text>
      <Text style={CardStyles.cardText}>{item.price}</Text>
    </Card>
  );
};

export default CardContent;
