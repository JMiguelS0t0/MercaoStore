import React, {createContext, useReducer, useEffect, useContext} from 'react';
import {AuthContext} from './AuthContext';
import firebase from '../firebase';

export const PurchasesContext = createContext();

const initialState = {
  purchases: [],
  loading: false,
  error: null,
};

const purchasesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_PURCHASES':
      return {
        ...state,
        purchases: action.payload,
        loading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'ADD_PURCHASE':
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };
    default:
      return state;
  }
};

export const PurchasesProvider = ({children}) => {
  const [state, dispatch] = useReducer(purchasesReducer, initialState);
  const {user} = useContext(AuthContext);

  const loadPurchases = async () => {
    if (!user) {
      dispatch({type: 'SET_PURCHASES', payload: []});
      return;
    }

    try {
      dispatch({type: 'SET_LOADING', payload: true});

      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        dispatch({type: 'SET_PURCHASES', payload: []});
        return;
      }

      const userData = userDoc.data();
      const userPurchases = userData.purchases || [];

      dispatch({type: 'SET_PURCHASES', payload: userPurchases});
    } catch (error) {
      console.error('Error loading purchases:', error);
      dispatch({type: 'SET_ERROR', payload: error.message});
    }
  };

  useEffect(() => {
    if (!user) {
      dispatch({type: 'SET_PURCHASES', payload: []});
      return;
    }

    const unsubscribe = firebase.db
      .collection('user')
      .doc(user.id)
      .onSnapshot(
        doc => {
          if (doc.exists) {
            const userData = doc.data();
            dispatch({
              type: 'SET_PURCHASES',
              payload: userData.purchases || [],
            });
          } else {
            dispatch({type: 'SET_PURCHASES', payload: []});
          }
        },
        error => {
          console.error('Error in purchases listener:', error);
          dispatch({type: 'SET_ERROR', payload: error.message});
        },
      );

    return () => unsubscribe();
  }, [user]);

  const addPurchase = async newPurchase => {
    if (!user) {
      console.error('No user is logged in');
      return;
    }

    try {
      const userRef = firebase.db.collection('user').doc(user.id);
      const userDoc = await userRef.get();
      const currentPurchases = userDoc.exists
        ? userDoc.data().purchases || []
        : [];

      await userRef.update({
        purchases: [...currentPurchases, newPurchase],
      });

      dispatch({type: 'ADD_PURCHASE', payload: newPurchase});
    } catch (error) {
      console.error('Error adding purchase:', error);
      dispatch({type: 'SET_ERROR', payload: error.message});
    }
  };

  return (
    <PurchasesContext.Provider
      value={{
        purchases: state.purchases,
        loading: state.loading,
        error: state.error,
        addPurchase,
      }}>
      {children}
    </PurchasesContext.Provider>
  );
};
