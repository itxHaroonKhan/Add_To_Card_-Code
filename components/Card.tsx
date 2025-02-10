"use client";
import CartContext from "@/context";
import React, { useContext } from "react";


// 🟢 Cart Component
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 mt-4 border p-4">
            <h1>{item.name}</h1>
            <h1>${item.price}</h1>
            <h1>{item.image}</h1>
            <h1>{item.description}</h1>

            {/* ❌ Remove from Cart Button */}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove from Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
