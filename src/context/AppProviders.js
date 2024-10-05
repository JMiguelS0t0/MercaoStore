import React from 'react';
import {AuthProvider} from './AuthContext';
import {UserProvider} from './UserContext';
import {ProductProvider} from './ProductContext';
import {PurchasesProvider} from './PurchaseContext';
import {PaymentProvider} from './PaymentContext';

const AppProviders = ({children}) => {
  return (
    <AuthProvider>
      <UserProvider>
        <ProductProvider>
          <PurchasesProvider>
            <PaymentProvider>{children}</PaymentProvider>
          </PurchasesProvider>
        </ProductProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default AppProviders;
