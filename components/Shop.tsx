"use client";
import CartContext from "@/context";
import React, { useContext } from "react";


// 🟢 پروڈکٹس کی Type بتاتے ہیں
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// 🛒 Sample Products
const products: Product[] = [
  { id: 1, name: "Product 1", price: 100, image: "image1.jpg", description: "Description 1" },
  { id: 2, name: "Product 2", price: 200, image: "image2.jpg", description: "Description 2" },
  { id: 3, name: "Product 3", price: 300, image: "image3.jpg", description: "Description 3" },
  { id: 4, name: "Product 4", price: 400, image: "image4.jpg", description: "Description 4" },
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      {products.map((item) => (
        <div key={item.id} className="flex gap-4 mt-4 border p-4">
          <h1>{item.name}</h1>
          <h1>${item.price}</h1>
          <h1>{item.image}</h1>
          <h1>{item.description}</h1>

          {/* 🛒 Add to Cart Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => addToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
