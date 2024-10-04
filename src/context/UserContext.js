import React, {createContext, useReducer} from 'react';

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

  const addToFavorites = item => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: item});
  };

  const removeFromFavorites = item => {
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: item});
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
      }}>
      {children}
    </UserContext.Provider>
  );
};
