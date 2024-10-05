// src/context/PaymentContext.js
import React, {createContext, useState, useContext, useEffect} from 'react';
import {ProductContext} from './ProductContext';

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const {cart} = useContext(ProductContext);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(15);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcSubtotal = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0,
    );
    setSubtotal(calcSubtotal);
    setTotal(calcSubtotal + shipping);
  }, [cart, shipping]);

  return (
    <PaymentContext.Provider
      value={{
        cart,
        subtotal,
        shipping,
        total,
      }}>
      {children}
    </PaymentContext.Provider>
  );
};
