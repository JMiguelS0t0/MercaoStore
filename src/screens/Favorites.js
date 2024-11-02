import React, {useContext, useCallback} from 'react';
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import favoritesStyles from '../styles/screens/FavoriteStyles';
import CardItem from '../components/Product/CardItem';
import {UserContext} from '../context/UserContext';
import {AuthContext} from '../context/AuthContext';

const Favorites = () => {
  const {favorites, loading, removeFromFavorites} = useContext(UserContext);
  const {user} = useContext(AuthContext);

  const handleRemoveFavorite = useCallback(
    item => {
      if (item.firebaseId) {
        removeFromFavorites(item.firebaseId);
      } else {
        console.error('No firebaseId found for item:', item);
      }
    },
    [removeFromFavorites],
  );

  const renderItem = useCallback(
    ({item}) => {
      return (
        <CardItem
          item={item}
          onRemoveFavorite={() => handleRemoveFavorite(item)}
        />
      );
    },
    [handleRemoveFavorite],
  );

  if (!user) {
    return (
      <View style={favoritesStyles.emptyContainer}>
        <Text style={favoritesStyles.emptyText}>
          Debes iniciar sesión para ver tus favoritos
        </Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={favoritesStyles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={favoritesStyles.container}>
      {favorites.length === 0 ? (
        <View style={favoritesStyles.emptyContainer}>
          <Text style={favoritesStyles.emptyText}>
            No tienes productos en favoritos
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={item => item.firebaseId}
          numColumns={2}
          contentContainerStyle={favoritesStyles.listContainer}
          style={favoritesStyles.cardsContainer}
        />
      )}
    </View>
  );
};

export default Favorites;
