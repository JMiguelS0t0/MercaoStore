import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Animated} from 'react-native';
import CardStyles from '../../styles/components/cardStyles';
import {useNavigation} from '@react-navigation/native';
import CardContent from './CardContent';

const CardItem = ({item}) => {
  const navigation = useNavigation();
  const [pressedCardId, setPressedCardId] = useState(null);

  const handlePressIn = () => {
    setPressedCardId(item.id);
  };

  const handlePressOut = () => {
    setPressedCardId(null);
  };

  const isPressed = pressedCardId === item.id;

  return (
    <View style={CardStyles.cardWrapper}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => navigation.navigate('Detail')}>
        <Animated.View
          style={[
            CardStyles.cardContainer,
            isPressed && {transform: [{scale: 0.95}], opacity: 0.7},
          ]}>
          <CardContent
            item={item}
            onOffer={item.onOffer}
            offerPrice={item.offerPrice}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CardItem;
