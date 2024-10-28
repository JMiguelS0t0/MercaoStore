import React, {useContext, useCallback} from 'react';
import {Card, Text, Icon} from '@rneui/themed';
import {View, Pressable} from 'react-native';
import {UserContext} from '../../context/UserContext';
import {ProductContext} from '../../context/ProductContext';
import {AuthContext} from '../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import CardStyles from '../../styles/components/cardStyles';

const CardContent = ({item}) => {
  const {favorites, addToFavorites, removeFromFavorites} =
    useContext(UserContext);
  const {selectProduct} = useContext(ProductContext);
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();
  const isFavorite = favorites.some(
    product => product.firebaseId === item.id || product.id === item.id,
  );

  const handleProductPress = useCallback(() => {
    selectProduct(item);
    navigation.navigate('Detail');
  }, [item, navigation, selectProduct]);

  const handleToggleFavorite = useCallback(async () => {
    if (!user) {
      navigation.navigate('Login');
      return;
    }

    try {
      if (isFavorite) {
        await removeFromFavorites(item);
      } else {
        await addToFavorites(item);
      }
    } catch (error) {
      console.error('Error al gestionar favoritos:', error);
    }
  }, [item, isFavorite, user, addToFavorites, removeFromFavorites, navigation]);

  const renderPrice = () => {
    if (item.onOffer) {
      return (
        <View style={CardStyles.offerContainer}>
          <Text style={[CardStyles.cardText, CardStyles.originalPrice]}>
            ${item.price}
          </Text>
          <Text style={[CardStyles.cardText, CardStyles.offerPrice]}>
            ${item.offerPrice}
          </Text>
        </View>
      );
    }
    return <Text style={CardStyles.cardText}>${item.price}</Text>;
  };

  return (
    <Pressable onPress={handleProductPress}>
      <Card containerStyle={CardStyles.cardContainer}>
        <View style={CardStyles.imageContainer}>
          <Card.Image
            source={{uri: item.images}}
            style={CardStyles.cardImage}
            resizeMode="contain"
          />
          <Pressable
            style={CardStyles.heartIcon}
            onPress={handleToggleFavorite}>
            <Icon
              name="heart"
              type="font-awesome-5"
              solid={isFavorite}
              color={isFavorite ? '#7b5bbd' : '#fff'}
              size={15}
            />
          </Pressable>
        </View>
        <Text style={CardStyles.cardTitle}>{item.title}</Text>
        {renderPrice()}
      </Card>
    </Pressable>
  );
};

export default React.memo(CardContent);
