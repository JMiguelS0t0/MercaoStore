import React, {createContext, useReducer, useEffect, useContext} from 'react';
import {AuthContext} from './AuthContext';
import firebase from '../firebase';

export const ProductContext = createContext();

const initialState = {
  products: [],
  filteredProducts: [],
  selectedProduct: null,
  cart: [],
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
    case 'TOGGLE_FAVORITE':
      const productInFavorites = state.favorites.find(
        product => product.id === action.payload.id,
      );
      if (productInFavorites) {
        return {
          ...state,
          favorites: state.favorites.filter(
            product => product.id !== action.payload.id,
          ),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    case 'SEARCH_PRODUCT':
      const searchTerm = action.payload.toLowerCase();
      const filteredProducts = state.products.filter(
        product =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm),
      );
      return {
        ...state,
        filteredProducts: filteredProducts,
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
      const productInCart = state.cart.find(
        product => product.id === action.payload.id,
      );
      if (productInCart) {
        return {
          ...state,
          cart: state.cart.map(product =>
            product.id === action.payload.id
              ? {...product, quantity: product.quantity + 1}
              : product,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.id
            ? {...product, quantity: action.payload.quantity}
            : product,
        ),
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

        const products = productsCollection.docs.map(doc => {
          const data = doc.data();
          const comments = data.comments
            ? Array.isArray(data.comments)
              ? data.comments
              : [data.comments]
            : [];

          return {
            id: doc.id,
            title: data.title || '',
            description: data.description || '',
            category: data.category || '',
            price: data.price || 0,
            offerPrice: data.offerPrice || 0,
            onOffer: data.onOffer || false,
            images: data.images || '',
            features: Array.isArray(data.features) ? data.features : [],
            comments: comments,
          };
        });

        dispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: products});
      } catch (error) {
        console.error('Error al cargar productos:', error);
        dispatch({type: 'FETCH_PRODUCTS_ERROR', payload: error.message});
      }
    };

    fetchProducts();

    const fetchUserFavorites = async () => {
      if (user) {
        try {
          const userRef = firebase.db.collection('user').doc(user.id);
          const userDoc = await userRef.get();

          if (userDoc.exists) {
            const userFavorites = userDoc.data().favorites || [];

            if (userFavorites.length === 0) {
              dispatch({
                type: 'UPDATE_USER_FAVORITES',
                payload: [],
              });
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

            dispatch({
              type: 'UPDATE_USER_FAVORITES',
              payload: validProducts,
            });
          }
        } catch (error) {
          console.error('Error al cargar los favoritos del usuario:', error);
          dispatch({
            type: 'UPDATE_USER_FAVORITES',
            payload: [],
          });
        }
      }
    };

    fetchUserFavorites();
  }, [user]);

  const toggleFavorite = async product => {
    try {
      const userId = user?.id;

      if (!userId) {
        throw new Error('User not authenticated');
      }

      const userRef = firebase.db.collection('user').doc(userId);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        throw new Error('User not found in database');
      }

      const userFavorites = userDoc.data().favorites || [];
      let updatedFavorites;

      if (userFavorites.includes(product.id)) {
        updatedFavorites = userFavorites.filter(favId => favId !== product.id);
      } else {
        updatedFavorites = [...userFavorites, product.id];
      }

      await userRef.update({
        favorites: updatedFavorites,
      });

      dispatch({type: 'TOGGLE_FAVORITE', payload: product});
    } catch (error) {
      console.error('Error al actualizar favoritos:', error);
    }
  };

  const addComment = async (productId, comment) => {
    try {
      const productRef = firebase.db.collection('product').doc(productId);
      const newCommentId = Date.now();

      const doc = await productRef.get();
      const productData = doc.data();
      const currentComments = productData.comments || [];

      const commentsArray = Array.isArray(currentComments)
        ? currentComments
        : [currentComments].filter(Boolean);

      const newComment = {
        id: newCommentId,
        text: comment,
      };

      await productRef.update({
        comments: [...commentsArray, newComment],
      });

      dispatch({
        type: 'ADD_COMMENT',
        payload: {
          productId,
          comment: newComment,
        },
      });

      return newComment;
    } catch (error) {
      console.error('Error al añadir comentario:', error);
      throw error;
    }
  };

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

  const searchProduct = term => {
    dispatch({type: 'SEARCH_PRODUCT', payload: term});
  };

  const filterOffers = () => {
    dispatch({type: 'FILTER_OFFERS'});
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
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFavorite,
        addComment,
        searchProduct,
        filterOffers,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
