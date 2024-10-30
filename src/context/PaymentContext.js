import React, {createContext, useState, useContext, useEffect} from 'react';
import {ProductContext} from './ProductContext';

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const {cart, products} = useContext(ProductContext);
  const [subtotal, setSubtotal] = useState(0);
  const shipping = 15;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotals();
  }, [cart, products]);

  const calculateTotals = () => {
    const cartArray = Object.values(cart || {});

    const newSubtotal = cartArray.reduce((acc, item) => {
      const product = products.find(p => p.id === item.product);
      const price = product?.onOffer ? product.offerPrice : product?.price;
      return acc + (price || 0) * item.quantity;
    }, 0);

    setSubtotal(newSubtotal);
    setTotal(newSubtotal + shipping);
  };

  const getProductDetails = productId => {
    return products.find(p => p.id === productId);
  };

  return (
    <PaymentContext.Provider
      value={{
        subtotal,
        shipping,
        total,
        cart,
        getProductDetails,
      }}>
      {children}
    </PaymentContext.Provider>
  );
};
