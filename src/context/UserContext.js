import React, {createContext, useReducer, useEffect, useContext} from 'react';
import {AuthContext} from './AuthContext';
import firebase from '../firebase';

export const UserContext = createContext();

const initialState = {
  favorites: [],
  purchases: [],
  userProfile: {
    name: '',
    email: '',
    birthday: '',
    address: '',
  },
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(
          item => item.id !== action.payload.id,
        ),
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };
    case 'ADD_TO_PURCHASES':
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };
    case 'UPDATE_USER_PROFILE':
      return {
        ...state,
        userProfile: {...state.userProfile, ...action.payload},
      };
    default:
      return state;
  }
};

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const loadUserFavorites = async () => {
      console.log('UserContext - Loading favorites for user:', user?.id);
      if (!user) {
        console.log('UserContext - No user logged in');
        dispatch({type: 'SET_FAVORITES', payload: []});
        return;
      }

      try {
        const userRef = firebase.db.collection('user').doc(user.id);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
          console.log('UserContext - User document does not exist');
          dispatch({type: 'SET_FAVORITES', payload: []});
          return;
        }

        const userFavorites = userDoc.data().favorites || [];
        console.log('UserContext - User favorites IDs:', userFavorites);

        if (!userFavorites.length) {
          console.log('UserContext - No favorites found');
          dispatch({type: 'SET_FAVORITES', payload: []});
          return;
        }

        const favoriteProducts = await Promise.all(
          userFavorites.map(async favoriteId => {
            const productDoc = await firebase.db
              .collection('product')
              .doc(favoriteId)
              .get();

            if (productDoc.exists) {
              return {
                id: productDoc.id,
                ...productDoc.data(),
              };
            }
            return null;
          }),
        );

        const validProducts = favoriteProducts.filter(
          product => product !== null,
        );
        console.log('UserContext - Fetched favorite products:', validProducts);
        dispatch({type: 'SET_FAVORITES', payload: validProducts});
      } catch (error) {
        console.error('UserContext - Error loading favorites:', error);
        dispatch({type: 'SET_FAVORITES', payload: []});
      }
    };

    loadUserFavorites();
  }, [user]);

  const addToFavorites = async item => {
    try {
      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        await userRef.set({favorites: [item.id]});
      } else {
        const userFavorites = userDoc.data().favorites || [];
        if (!userFavorites.includes(item.id)) {
          const updatedFavorites = [...userFavorites, item.id];
          await userRef.update({favorites: updatedFavorites});
        }
      }

      dispatch({type: 'ADD_TO_FAVORITES', payload: item});
    } catch (error) {
      console.error('Error al agregar a favoritos:', error);
    }
  };

  const removeFromFavorites = async item => {
    try {
      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const userFavorites = userDoc.data().favorites || [];
        const updatedFavorites = userFavorites.filter(id => id !== item.id);

        await userRef.update({favorites: updatedFavorites});
        dispatch({type: 'REMOVE_FROM_FAVORITES', payload: item});
      }
    } catch (error) {
      console.error('Error al eliminar de favoritos:', error);
    }
  };

  const addToPurchases = item => {
    dispatch({type: 'ADD_TO_PURCHASES', payload: item});
  };

  const updateUserProfile = updatedProfile => {
    dispatch({type: 'UPDATE_USER_PROFILE', payload: updatedProfile});
  };

  return (
    <UserContext.Provider
      value={{
        favorites: state.favorites,
        purchases: state.purchases,
        userProfile: state.userProfile,
        addToFavorites,
        removeFromFavorites,
        addToPurchases,
        updateUserProfile,
        dispatch,
      }}>
      {children}
    </UserContext.Provider>
  );
};
