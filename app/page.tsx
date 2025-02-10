"use client";
import Cart from "@/components/Card";
import Shop from "@/components/Shop";
import CartProvider from "@/ContextProvder";
import React from "react";


const App = () => {
  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <Shop />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
