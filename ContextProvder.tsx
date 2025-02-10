"use client";
import React, { useState } from "react";
import CartContext from "./context";


// 🟢 CartItem کی Type بتاتے ہیں
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// 🟢 ContextProvider بناتے ہیں تاکہ Cart کا ڈیٹا ہر جگہ دستیاب ہو۔
const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ➕ Cart میں Item شامل کرنے کا فنکشن
  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  // ❌ Cart سے Item ہٹانے کا فنکشن
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
