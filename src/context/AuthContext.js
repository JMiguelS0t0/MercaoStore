import React, {createContext, useReducer, useEffect} from 'react';

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
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
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
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
    const testUser = {
      name: 'testuser',
      email: 'test@example.com',
      password: 'Test123!',
    };

    dispatch({type: 'LOGIN_SUCCESS', payload: testUser});
  }, []);

  const login = async credentials => {
    try {
      const user = {
        name: 'testuser',
        email: credentials.email,
        password: credentials.password,
      };
      if (
        credentials.username === 'testuser' &&
        credentials.password === 'Test123!'
      ) {
        dispatch({type: 'LOGIN_SUCCESS', payload: user});
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      dispatch({type: 'LOGIN_ERROR', payload: 'Login failed'});
    }
  };

  const register = async credentials => {
    try {
      const newUser = {
        name: credentials.username,
        email: credentials.email,
        password: credentials.password,
      };
      dispatch({type: 'REGISTER_SUCCESS', payload: newUser});
    } catch (error) {
      dispatch({type: 'REGISTER_ERROR', payload: 'Registration failed'});
    }
  };

  const logout = () => {
    dispatch({type: 'LOGOUT'});
  };

  return (
    <AuthContext.Provider value={{...state, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
