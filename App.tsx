import React from 'react';
import AppNavigator from './src/navegation/AppNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {ProductProvider} from './src/context/ProductContext';

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <AppNavigator />
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
