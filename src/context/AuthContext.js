import React, {createContext, useReducer, useEffect} from 'react';

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
        users: [...state.users, action.payload],
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
      birthday: '01/01/1990',
      country: 'Colombia',
      department: 'Antioquia',
      city: 'Medellín',
      address: 'Calle Falsa 123',
    };

    dispatch({type: 'REGISTER_SUCCESS', payload: testUser});
  }, []);

  const login = async credentials => {
    try {
      const user = state.users.find(
        user =>
          user.name === credentials.username &&
          user.password === credentials.password,
      );

      if (user) {
        dispatch({type: 'LOGIN_SUCCESS', payload: user});
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      dispatch({type: 'LOGIN_ERROR', payload: 'Login failed'});
    }
  };

  const register = async credentials => {
    try {
      const newUser = {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        birthday: credentials.birthday,
        country: credentials.country,
        department: credentials.department,
        city: credentials.city,
        address: credentials.address,
      };
      const existingUser = state.users.find(
        user => user.email === newUser.email,
      );
      if (existingUser) {
        throw new Error('User already registered');
      }

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
