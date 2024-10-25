import React, {useContext, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import favoritesStyles from '../styles/screens/FavoriteStyles';
import CardItem from '../components/Product/CardItem';
import {ProductContext} from '../context/ProductContext';

const Favorites = () => {
  const {favorites} = useContext(ProductContext);

  const renderItem = useCallback(({item}) => <CardItem item={item} />, []);

  return (
    <View style={favoritesStyles.container}>
      {favorites.length === 0 ? (
        <Text style={favoritesStyles.emptyText}>
          No tienes productos en favoritos
        </Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
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
