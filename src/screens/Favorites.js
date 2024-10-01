import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import favoritesStyles from '../styles/screens/FavoriteStyles';
import CardItem from '../components/Product/CardItem';
import {ProductContext} from '../context/ProductContext';

const Favorites = () => {
  const {favorites} = useContext(ProductContext);

  return (
    <View style={favoritesStyles.container}>
      {favorites.length === 0 ? (
        <Text style={favoritesStyles.emptyText}>
          No tienes productos en favoritos
        </Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => <CardItem item={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={favoritesStyles.listContainer}
          style={favoritesStyles.cardsContainer}
        />
      )}
    </View>
  );
};

export default Favorites;
