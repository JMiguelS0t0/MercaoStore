import React, {createContext, useReducer, useEffect, useContext} from 'react';
import {AuthContext} from './AuthContext';
import firebase from '../firebase';

export const ProductContext = createContext();

const initialState = {
  products: [],
  filteredProducts: [],
  selectedProduct: null,
  cart: {},
  favorites: [],
  loading: true,
  error: null,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_USER_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };
    case 'UPDATE_USER_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'TOGGLE_FAVORITE':
      const productInFavorites = state.favorites.find(
        product => product.id === action.payload.id,
      );
      return productInFavorites
        ? {
            ...state,
            favorites: state.favorites.filter(
              product => product.id !== action.payload.id,
            ),
          }
        : {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
    case 'SEARCH_PRODUCT':
      const searchTerm = action.payload.toLowerCase();
      const filteredProducts = state.products.filter(
        product =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm),
      );
      return {
        ...state,
        filteredProducts,
      };
    case 'FILTER_OFFERS':
      const offerProducts = state.products.filter(product => product.onOffer);
      return {
        ...state,
        filteredProducts: offerProducts,
      };
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case 'ADD_TO_CART':
      const productId = action.payload.id;
      return {
        ...state,
        cart: {
          ...state.cart,
          [productId]: {
            product: productId,
            quantity: (state.cart[productId]?.quantity || 0) + 1,
          },
        },
      };
    case 'REMOVE_FROM_CART':
      const {[action.payload.id]: _, ...updatedCart} = state.cart;
      return {
        ...state,
        cart: updatedCart,
      };
    case 'UPDATE_CART_IN_FIREBASE':
      return {
        ...state,
        cart: action.payload,
      };
    case 'UPDATE_QUANTITY':
      const updatedQuantityCart = {
        ...state.cart,
        [action.payload.id]: {
          ...state.cart[action.payload.id],
          quantity: action.payload.quantity,
        },
      };
      return {
        ...state,
        cart: updatedQuantityCart,
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId
            ? {
                ...product,
                comments: Array.isArray(product.comments)
                  ? [...product.comments, action.payload.comment]
                  : [action.payload.comment],
              }
            : product,
        ),
        selectedProduct:
          state.selectedProduct?.id === action.payload.productId
            ? {
                ...state.selectedProduct,
                comments: Array.isArray(state.selectedProduct.comments)
                  ? [...state.selectedProduct.comments, action.payload.comment]
                  : [action.payload.comment],
              }
            : state.selectedProduct,
      };
    case 'ADD_RATING':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId
            ? {
                ...product,
                ratings: Array.isArray(product.ratings)
                  ? [...product.ratings, action.payload.rating]
                  : [action.payload.rating],
                averageRating: Array.isArray(product.ratings)
                  ? (product.ratings.reduce((a, b) => a + b, 0) +
                      action.payload.rating) /
                    (product.ratings.length + 1)
                  : action.payload.rating,
              }
            : product,
        ),
        selectedProduct:
          state.selectedProduct?.id === action.payload.productId
            ? {
                ...state.selectedProduct,
                ratings: Array.isArray(state.selectedProduct.ratings)
                  ? [...state.selectedProduct.ratings, action.payload.rating]
                  : [action.payload.rating],
                averageRating: Array.isArray(state.selectedProduct.ratings)
                  ? (state.selectedProduct.ratings.reduce((a, b) => a + b, 0) +
                      action.payload.rating) /
                    (state.selectedProduct.ratings.length + 1)
                  : action.payload.rating,
              }
            : state.selectedProduct,
      };
    default:
      return state;
  }
};

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = await firebase.db
          .collection('product')
          .get();
        const products = productsCollection.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title || '',
          description: doc.data().description || '',
          category: doc.data().category || '',
          price: doc.data().price || 0,
          offerPrice: doc.data().offerPrice || 0,
          onOffer: doc.data().onOffer || false,
          images: doc.data().images || '',
          features: Array.isArray(doc.data().features)
            ? doc.data().features
            : [],
          comments: doc.data().comments || [],
          ratings: doc.data().ratings || [],
          averageRating: doc.data().averageRating || 0,
        }));
        dispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: products});
      } catch (error) {
        console.error('Error al cargar productos:', error);
        dispatch({type: 'FETCH_PRODUCTS_ERROR', payload: error.message});
      }
    };

    const fetchUserCart = async () => {
      if (user) {
        try {
          const userRef = firebase.db.collection('user').doc(user.id);
          const userDoc = await userRef.get();

          if (userDoc.exists) {
            const userCart = userDoc.data().cart || {};
            dispatch({type: 'UPDATE_USER_CART', payload: userCart});
          }
        } catch (error) {
          console.error('Error al cargar el carrito del usuario:', error);
        }
      }
    };

    const fetchUserFavorites = async () => {
      if (user) {
        try {
          const userRef = firebase.db.collection('user').doc(user.id);
          const userDoc = await userRef.get();

          if (userDoc.exists) {
            const userFavorites = userDoc.data().favorites || [];
            dispatch({
              type: 'UPDATE_USER_FAVORITES',
              payload: userFavorites,
            });
          }
        } catch (error) {
          console.error('Error al cargar los favoritos del usuario:', error);
        }
      }
    };

    fetchProducts();
    fetchUserCart();
    fetchUserFavorites();
  }, [user]);

  const toggleFavorite = async product => {
    try {
      const userId = user?.id;
      if (!userId) throw new Error('User not authenticated');

      const userRef = firebase.db.collection('user').doc(userId);
      const userDoc = await userRef.get();
      const userFavorites = userDoc.exists
        ? userDoc.data().favorites || []
        : [];

      let updatedFavorites;
      if (userFavorites.includes(product.id)) {
        updatedFavorites = userFavorites.filter(favId => favId !== product.id);
      } else {
        updatedFavorites = [...userFavorites, product.id];
      }

      await userRef.update({favorites: updatedFavorites});
      dispatch({type: 'TOGGLE_FAVORITE', payload: product});
    } catch (error) {
      console.error('Error al actualizar favoritos:', error);
    }
  };

  const addComment = async (productId, comment, username) => {
    try {
      const productRef = firebase.db.collection('product').doc(productId);
      const newCommentId = Date.now();

      const doc = await productRef.get();
      const currentComments = Array.isArray(doc.data().comments)
        ? doc.data().comments
        : [];

      const newComment = {
        id: newCommentId,
        text: comment,
        username: username,
      };

      await productRef.update({comments: [...currentComments, newComment]});
      dispatch({
        type: 'ADD_COMMENT',
        payload: {productId, comment: newComment},
      });
    } catch (error) {
      console.error('Error al añadir comentario:', error);
    }
  };

  const selectProduct = product => {
    dispatch({type: 'SELECT_PRODUCT', payload: product});
  };

  const addToCartAndFirebase = async product => {
    try {
      const userId = user?.id;
      if (!userId) throw new Error('User not authenticated');

      dispatch({type: 'ADD_TO_CART', payload: product});

      const userRef = firebase.db.collection('user').doc(userId);
      const userDoc = await userRef.get();
      const currentCart = userDoc.exists ? userDoc.data().cart || {} : {};

      const updatedCart = {
        ...currentCart,
        [product.id]: {
          product: product.id,
          quantity: (currentCart[product.id]?.quantity || 0) + 1,
        },
      };

      await userRef.update({cart: updatedCart});
      dispatch({type: 'UPDATE_CART_IN_FIREBASE', payload: updatedCart});
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const removeFromCartAndFirebase = async product => {
    try {
      const userId = user?.id;
      if (!userId) throw new Error('User not authenticated');

      dispatch({type: 'REMOVE_FROM_CART', payload: product});

      const userRef = firebase.db.collection('user').doc(userId);
      const userDoc = await userRef.get();
      const currentCart = userDoc.exists ? userDoc.data().cart || {} : {};

      const {[product.id]: _, ...updatedCart} = currentCart;
      await userRef.update({cart: updatedCart});
      dispatch({type: 'UPDATE_CART_IN_FIREBASE', payload: updatedCart});
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const updateQuantityAndFirebase = async (product, quantity) => {
    try {
      const userId = user?.id;
      if (!userId) throw new Error('User not authenticated');

      dispatch({type: 'UPDATE_QUANTITY', payload: {id: product.id, quantity}});

      const userRef = firebase.db.collection('user').doc(userId);
      const userDoc = await userRef.get();
      const currentCart = userDoc.exists ? userDoc.data().cart || {} : {};

      const updatedCart = {
        ...currentCart,
        [product.id]: {product: product.id, quantity},
      };

      await userRef.update({cart: updatedCart});
      dispatch({type: 'UPDATE_CART_IN_FIREBASE', payload: updatedCart});
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  const addRating = async (productId, rating) => {
    try {
      const productRef = firebase.db.collection('product').doc(productId);
      const doc = await productRef.get();
      const currentRatings = Array.isArray(doc.data().ratings)
        ? doc.data().ratings
        : [];
      const newRatings = [...currentRatings, rating];
      const averageRating =
        newRatings.reduce((a, b) => a + b, 0) / newRatings.length;

      await productRef.update({
        ratings: newRatings,
        averageRating: averageRating,
      });

      dispatch({
        type: 'ADD_RATING',
        payload: {productId, rating},
      });
    } catch (error) {
      console.error('Error al añadir calificación:', error);
    }
  };

  const clearCart = async () => {
    try {
      dispatch({type: 'UPDATE_USER_CART', payload: {}});
      if (user && user.id) {
        const userRef = firebase.db.collection('user').doc(user.id);
        await userRef.update({cart: {}});
      }
    } catch (error) {
      console.error('Error al limpiar el carrito:', error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.filteredProducts,
        selectedProduct: state.selectedProduct,
        cart: state.cart,
        favorites: state.favorites,
        loading: state.loading,
        error: state.error,
        selectProduct,
        addToCart: addToCartAndFirebase,
        removeFromCart: removeFromCartAndFirebase,
        updateQuantity: updateQuantityAndFirebase,
        toggleFavorite,
        addComment,
        searchProduct: term =>
          dispatch({type: 'SEARCH_PRODUCT', payload: term}),
        filterOffers: () => dispatch({type: 'FILTER_OFFERS'}),
        addRating,
        clearCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
