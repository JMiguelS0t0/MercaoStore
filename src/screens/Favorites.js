import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {Card, Icon} from '@rneui/themed';
import favoritesStyles from '../styles/screens/FavoriteStyles';

const data = [
  {
    id: 1,
    title: 'Favorite Item 1',
    price: 'US$ 100,00',
    image: require('../assets/Iphone.webp'),
    status: 'Not available',
  },
  {
    id: 2,
    title: 'Favorite Item 2',
    price: 'US$ 200,00',
    image: require('../assets/Iphone.webp'),
    status: 'Available',
  },
  {
    id: 3,
    title: 'Favorite Item 3',
    price: 'US$ 300,00',
    image: require('../assets/Iphone.webp'),
    status: 'Available',
  },
];

const renderItem = ({item}) => (
  <View style={favoritesStyles.cardWrapper}>
    <Card containerStyle={favoritesStyles.cardContainer}>
      <View style={favoritesStyles.imageContainer}>
        <Card.Image
          source={item.image}
          style={favoritesStyles.cardImage}
          resizeMode="contain"
        />
        <Icon
          name="heart"
          type="font-awesome-5"
          color="#fff"
          size={15}
          solid={true}
          containerStyle={favoritesStyles.heartIcon}
        />
      </View>
      <Text style={favoritesStyles.cardTitle}>{item.title}</Text>
      <Text style={favoritesStyles.cardText}>{item.price}</Text>
      <Text style={favoritesStyles.cardText}>{item.status}</Text>
    </Card>
  </View>
);

const Favorites = () => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
    numColumns={2}
    contentContainerStyle={favoritesStyles.listContainer}
    style={favoritesStyles.cardsContainer}
  />
);

export default Favorites;
