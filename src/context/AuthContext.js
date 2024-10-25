import React, {createContext, useReducer, useEffect} from 'react';
import firebase from '../firebase/firebase';

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
  loading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersCollection = await firebase.db.collection('user').get();
        const users = usersCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Usuarios cargados:', users);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };

    loadUsers();
  }, []);

  const register = async credentials => {
    try {
      if (
        !credentials.username ||
        !credentials.email ||
        !credentials.password
      ) {
        throw new Error('Todos los campos son obligatorios');
      }

      const usersRef = firebase.db.collection('user');

      const emailExists = await usersRef
        .where('email', '==', credentials.email)
        .get();

      if (!emailExists.empty) {
        throw new Error('El correo ya está registrado');
      }

      const usernameExists = await usersRef
        .where('username', '==', credentials.username)
        .get();

      if (!usernameExists.empty) {
        throw new Error('El nombre de usuario ya está registrado');
      }

      const newUser = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
        birthday: credentials.birthday || null,
        country: credentials.country || null,
        department: credentials.department || null,
        city: credentials.city || null,
        address: credentials.address || null,
        favorites: [],
        createdAt: firebase.firebase.firestore.FieldValue.serverTimestamp(),
      };

      const userDocRef = await usersRef.add(newUser);

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: {id: userDocRef.id, ...newUser},
      });

      return {success: true, userId: userDocRef.id};
    } catch (error) {
      dispatch({
        type: 'REGISTER_ERROR',
        payload: error.message,
      });
      throw error;
    }
  };

  const login = async credentials => {
    try {
      if (!credentials.username || !credentials.password) {
        throw new Error('Usuario y contraseña son requeridos');
      }

      const usersRef = firebase.db.collection('user');
      const querySnapshot = await usersRef
        .where('username', '==', credentials.username)
        .get();

      if (querySnapshot.empty) {
        throw new Error('Usuario no encontrado');
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (userData.password !== credentials.password) {
        throw new Error('Contraseña incorrecta');
      }

      const user = {
        id: userDoc.id,
        ...userData,
      };

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: user,
      });

      return {success: true, user};
    } catch (error) {
      dispatch({
        type: 'LOGIN_ERROR',
        payload: error.message,
      });
      throw error;
    }
  };

  const logout = () => {
    dispatch({type: 'LOGOUT'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        loading: state.loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
