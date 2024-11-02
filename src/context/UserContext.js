import React, {createContext, useReducer, useEffect, useContext} from 'react';
import {AuthContext} from './AuthContext';
import firebase from '../firebase';

export const UserContext = createContext();

const initialState = {
  favorites: [],
  purchases: [],
  userRatings: [],
  userProfile: {
    name: '',
    email: '',
    birthday: '',
    address: '',
    image: '',
  },
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      const updatedFavorites = state.favorites.filter(
        item => item.firebaseId !== action.payload,
      );
      console.log('Removing favorite with ID:', action.payload);
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };
    case 'UPDATE_USER_PROFILE':
      return {
        ...state,
        userProfile: {...state.userProfile, ...action.payload},
      };
    case 'SET_USER_RATINGS':
      return {...state, userRatings: action.payload};
    case 'ADD_USER_RATING':
      return {...state, userRatings: [...state.userRatings, action.payload]};
    default:
      return state;
  }
};

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const {user} = useContext(AuthContext);

  const loadUserProfile = async () => {
    if (!user) {
      dispatch({
        type: 'UPDATE_USER_PROFILE',
        payload: {name: '', email: '', birthday: '', address: '', image: ''},
      });
      return;
    }

    try {
      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const userProfileData = userDoc.data();
        console.log('User profile loaded:', userProfileData);
        dispatch({
          type: 'UPDATE_USER_PROFILE',
          payload: {
            name: userProfileData.username || '',
            email: userProfileData.email || '',
            birthday: userProfileData.birthday || '',
            address: userProfileData.address || '',
            image: userProfileData.image || '',
          },
        });
      } else {
        console.log('User document does not exist');
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const updateUserProfile = async profileData => {
    if (!user) {
      console.error('No user is logged in');
      return;
    }

    try {
      const userRef = firebase.db.collection('user').doc(user.id);
      await userRef.update(profileData);

      dispatch({
        type: 'UPDATE_USER_PROFILE',
        payload: profileData,
      });

      console.log('Perfil del usuario actualizado:', profileData);
    } catch (error) {
      console.error('Error al actualizar el perfil del usuario:', error);
    }
  };

  useEffect(() => {
    loadUserProfile();
    loadUserFavorites();
    loadUserRatings();
  }, [user]);

  const loadUserFavorites = async () => {
    if (!user) {
      dispatch({type: 'SET_FAVORITES', payload: []});
      return;
    }

    try {
      dispatch({type: 'SET_LOADING', payload: true});

      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        dispatch({type: 'SET_FAVORITES', payload: []});
        return;
      }

      const userFavorites = userDoc.data().favorites || [];

      if (!userFavorites.length) {
        dispatch({type: 'SET_FAVORITES', payload: []});
        return;
      }

      const productsPromises = userFavorites.map(favoriteId =>
        firebase.db.collection('product').doc(favoriteId).get(),
      );

      const productDocs = await Promise.all(productsPromises);

      const favoriteProducts = productDocs
        .filter(doc => doc.exists)
        .map(doc => ({
          ...doc.data(),
          firebaseId: doc.id,
        }));

      dispatch({type: 'SET_FAVORITES', payload: favoriteProducts});
    } catch (error) {
      console.error('Error loading favorites:', error);
      dispatch({type: 'SET_FAVORITES', payload: []});
    } finally {
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };

  useEffect(() => {
    loadUserProfile();
    loadUserFavorites();
    loadUserRatings();
  }, [user]);

  const loadUserRatings = async () => {
    if (!user) return;
    try {
      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      const ratings =
        userDoc.exists && userDoc.data().ratings ? userDoc.data().ratings : {};

      const userRatings = Object.entries(ratings).map(
        ([productId, rating]) => ({
          product: productId,
          rating: rating,
        }),
      );

      console.log('Loaded user ratings from Firebase:', userRatings);
      dispatch({type: 'SET_USER_RATINGS', payload: userRatings});
    } catch (error) {
      console.error('Error loading user ratings:', error);
    }
  };

  const addUserRating = async (productId, rating) => {
    if (!user) return;

    try {
      const userRef = firebase.db.collection('user').doc(user.id);

      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        await userRef.set({
          ratings: {
            [productId]: rating,
          },
        });
      } else {
        const userData = userDoc.data();
        const updatedRatings = {
          ...(userData.ratings || {}),
          [productId]: rating,
        };

        await userRef.update({
          ratings: updatedRatings,
        });
      }

      console.log('Saved user rating to Firebase:', {productId, rating});

      dispatch({
        type: 'ADD_USER_RATING',
        payload: {product: productId, rating},
      });
    } catch (error) {
      console.error('Error saving user rating:', error);
      throw error;
    }
  };

  const addToFavorites = async item => {
    try {
      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const firebaseId = item.firebaseId || item.id;
      if (!firebaseId) {
        throw new Error('Product does not have a valid Firebase ID');
      }

      const alreadyFavorite = state.favorites.some(
        favorite => favorite.firebaseId === firebaseId,
      );

      if (alreadyFavorite) {
        console.log('El producto ya está en favoritos:', firebaseId);
        return;
      }

      dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: {...item, firebaseId},
      });

      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        await userRef.set({favorites: [firebaseId]});
      } else {
        const userFavorites = userDoc.data().favorites || [];
        await userRef.update({
          favorites: [...userFavorites, firebaseId],
        });
      }

      console.log('Producto agregado a favoritos en Firebase:', firebaseId);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const removeFromFavorites = async item => {
    try {
      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const firebaseId = item.firebaseId || item.id;

      if (!firebaseId) {
        throw new Error('No firebaseId provided');
      }

      console.log('Removing item with firebaseId:', firebaseId);

      dispatch({type: 'REMOVE_FROM_FAVORITES', payload: firebaseId});

      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const currentFavorites = userDoc.data().favorites || [];
        const updatedFavorites = currentFavorites.filter(
          id => id !== firebaseId,
        );

        if (currentFavorites.length !== updatedFavorites.length) {
          await userRef.update({
            favorites: updatedFavorites,
          });

          console.log(
            'Producto eliminado de favoritos en Firebase:',
            firebaseId,
          );
        }
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        favorites: state.favorites,
        loading: state.loading,
        userProfile: state.userProfile,
        addToFavorites,
        removeFromFavorites,
        updateUserProfile,
        dispatch,
        addUserRating,
        userRatings: state.userRatings,
      }}>
      {children}
    </UserContext.Provider>
  );
};
