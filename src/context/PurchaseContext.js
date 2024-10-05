import React, {createContext, useReducer} from 'react';

export const PurchasesContext = createContext();

const initialState = {
  purchases: [
    {
      id: 1,
      title: 'iPhone 13 256 GB',
      price: 'US$ 600,00',
      image: require('../assets/Iphone.webp'),
      progressTitle: 'Arrive in 1 week',
      progress: 0.7,
    },
  ],
};

const purchasesReducer = (state, action) => {
  switch (action.type) {
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

  const addPurchase = newPurchase => {
    dispatch({type: 'ADD_PURCHASE', payload: newPurchase});
  };

  return (
    <PurchasesContext.Provider
      value={{purchases: state.purchases, addPurchase}}>
      {children}
    </PurchasesContext.Provider>
  );
};
