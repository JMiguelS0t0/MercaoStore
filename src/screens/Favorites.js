import React, {useContext, useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import favoritesStyles from '../styles/screens/FavoriteStyles';
import CardItem from '../components/Product/CardItem';
import {UserContext} from '../context/UserContext';
import {AuthContext} from '../context/AuthContext';
import firebase from '../firebase';

const Favorites = () => {
  const {favorites, dispatch} = useContext(UserContext);
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFavorites = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const userRef = firebase.db.collection('user').doc(user.id);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
          dispatch({type: 'SET_FAVORITES', payload: []});
          setLoading(false);
          return;
        }

        const userFavorites = userDoc.data().favorites || [];

        if (userFavorites.length === 0) {
          dispatch({type: 'SET_FAVORITES', payload: []});
          setLoading(false);
          return;
        }

        const productsPromises = userFavorites.map(favoriteId =>
          firebase.db.collection('product').doc(favoriteId).get(),
        );

        const productDocs = await Promise.all(productsPromises);

        const favoriteProducts = productDocs
          .filter(doc => doc.exists)
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

        dispatch({type: 'SET_FAVORITES', payload: favoriteProducts});
      } catch (error) {
        console.error('Error al cargar los favoritos:', error);
        dispatch({type: 'SET_FAVORITES', payload: []});
      } finally {
        setLoading(false);
      }
    };

    loadUserFavorites();
  }, [user, dispatch]);

  const renderItem = useCallback(({item}) => {
    return <CardItem item={item} />;
  }, []);

  if (!user) {
    return (
      <View style={favoritesStyles.container}>
        <Text style={favoritesStyles.emptyText}>
          Debes iniciar sesión para ver tus favoritos
        </Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={[favoritesStyles.container, favoritesStyles.centerContent]}>
        <ActivityIndicator size="large" color="#7b5bbd" />
      </View>
    );
  }

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
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={favoritesStyles.listContainer}
          style={favoritesStyles.cardsContainer}
        />
      )}
    </View>
  );
};

export default Favorites;
