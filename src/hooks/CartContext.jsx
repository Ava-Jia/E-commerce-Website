// CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// 从 localStorage 获取初始数据的函数
const getStoredCart = () => {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getStoredCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log('Cart updated:', cartItems); // 调试日志
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(currentItems => 
      currentItems.filter(item => item.id !== itemId)
    );
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItemsCount,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};