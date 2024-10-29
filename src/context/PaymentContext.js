import React, {createContext, useState, useContext, useEffect} from 'react';
import {ProductContext} from './ProductContext';

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const {cart, products} = useContext(ProductContext);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(15);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Convertir cart a array para calcular
    const cartArray = Object.values(cart || {});

    const newSubtotal = cartArray.reduce((acc, item) => {
      const product = products.find(p => p.id === item.product);
      return acc + (product?.price || 0) * item.quantity;
    }, 0);

    setSubtotal(newSubtotal);
    setTotal(newSubtotal + shipping);
  }, [cart, products, shipping]);

  return (
    <PaymentContext.Provider value={{subtotal, shipping, total}}>
      {children}
    </PaymentContext.Provider>
  );
};
