import React from 'react';
import {FlatList} from 'react-native';
import favoritesStyles from '../styles/screens/FavoriteStyles';
import CardItem from '../components/Product/CardItem';

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

const Favorites = () => (
  <FlatList
    data={data}
    renderItem={({item}) => <CardItem item={item} />}
    keyExtractor={item => item.id.toString()}
    numColumns={2}
    contentContainerStyle={favoritesStyles.listContainer}
    style={favoritesStyles.cardsContainer}
  />
);

export default Favorites;
