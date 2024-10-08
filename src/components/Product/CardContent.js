import React, {useContext} from 'react';
import {Card, Text, Icon} from '@rneui/themed';
import {View, Pressable} from 'react-native';
import {ProductContext} from '../../context/ProductContext';
import {useNavigation} from '@react-navigation/native';
import CardStyles from '../../styles/components/cardStyles';

const CardContent = ({item}) => {
  const {
    favorites = [],
    toggleFavorite,
    selectProduct,
  } = useContext(ProductContext);
  const navigation = useNavigation();

  const isFavorite = favorites.some(product => product.id === item.id);

  const handleProductPress = () => {
    selectProduct(item);
    navigation.navigate('Detail');
  };

  return (
    <Pressable onPress={handleProductPress}>
      <Card containerStyle={CardStyles.cardContainer}>
        <View style={CardStyles.imageContainer}>
          <Card.Image
            source={item.image}
            style={CardStyles.cardImage}
            resizeMode="contain"
          />
          <Pressable
            style={CardStyles.heartIcon}
            onPress={() => toggleFavorite(item)}>
            <Icon
              name="heart"
              type="font-awesome-5"
              color={isFavorite ? '#7b5bbd' : '#fff'}
              size={15}
            />
          </Pressable>
        </View>
        <Text style={CardStyles.cardTitle}>{item.title}</Text>
        {item.onOffer && item.offerPrice ? (
          <View style={CardStyles.offerContainer}>
            <Text style={[CardStyles.cardText, CardStyles.originalPrice]}>
              {item.price}
            </Text>
            <Text style={[CardStyles.cardText, CardStyles.offerPrice]}>
              {item.offerPrice}
            </Text>
          </View>
        ) : (
          <Text style={CardStyles.cardText}>{item.price}</Text>
        )}
      </Card>
    </Pressable>
  );
};

export default CardContent;
