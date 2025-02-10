"use client";
import { createContext } from "react";

// 🟢 Type Interface بناتے ہیں، تاکہ ہر چیز کلئیر ہو۔
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

// 🔹 ایک خالی کانٹیکسٹ بنا رہے ہیں، جسے بعد میں Provider کے ذریعے ڈیٹا دیا جائے گا۔
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
