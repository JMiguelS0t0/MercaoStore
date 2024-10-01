import React, {createContext, useReducer} from 'react';

export const ProductContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      title: 'Case iPhone 1',
      price: 'US$ 25,00',
      image: require('../assets/CaseIphone.webp'),
      onOffer: true,
      offerPrice: 'US$ 20,00',
    },
    {
      id: 2,
      title: 'iPhone 13',
      price: 'US$ 600,00',
      image: require('../assets/Iphone.webp'),
      onOffer: false,
    },
    {
      id: 3,
      title: 'iPhone 14',
      price: 'US$ 700,00',
      image: require('../assets/Iphone.webp'),
      onOffer: false,
    },
  ],
  selectedProduct: null,
  cart: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case 'ADD_TO_CART': {
      const productInCart = state.cart.find(
        product => product.id === action.payload.id,
      );

      if (productInCart) {
        return {
          ...state,
          cart: state.cart.map(product =>
            product.id === action.payload.id
              ? {...product, quantity: (product.quantity || 1) + 1}
              : product,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}],
        };
      }
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.id
            ? {...product, quantity: action.payload.quantity}
            : product,
        ),
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const selectProduct = product => {
    dispatch({type: 'SELECT_PRODUCT', payload: product});
  };

  const addToCart = product => {
    dispatch({type: 'ADD_TO_CART', payload: product});
  };

  const removeFromCart = product => {
    dispatch({type: 'REMOVE_FROM_CART', payload: product});
  };

  const updateQuantity = (product, quantity) => {
    dispatch({type: 'UPDATE_QUANTITY', payload: {id: product.id, quantity}});
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        selectedProduct: state.selectedProduct,
        cart: state.cart,
        selectProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
