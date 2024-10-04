import React from 'react';
import AppNavigator from './src/navegation/AppNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {ProductProvider} from './src/context/ProductContext';
import {UserProvider} from './src/context/UserContext';  

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>  
        <ProductProvider>
          <AppNavigator />
        </ProductProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
