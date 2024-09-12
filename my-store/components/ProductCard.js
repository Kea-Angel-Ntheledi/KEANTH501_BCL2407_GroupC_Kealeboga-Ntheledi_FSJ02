// components/ProductCard.js

import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000); // Simulate adding to cart delay
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Link href={`/products/${product.id}`} passHref>
        <div className="cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2 truncate">{product.title}</h2>
            <p className="text-pink-700 text-base mb-2 truncate">{product.description}</p>
            <p className="text-pink-900 font-bold">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
      <div className="p-4 flex items-center justify-between">
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`py-3 px-5 text-white text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors ${
            isAdding ? 'bg-gray-500 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'
          }`}
          disabled={isAdding}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M7 4V1H5v3H2v2h2l3.6 7.59-1.29 2.41c-.34.63-.51 1.35-.51 2.09V20h12v-2.91c0-.74-.17-1.46-.51-2.09l-1.29-2.41L20 6V4h-3V1h-2v3H7z" />
            <path d="M5 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM3 2c-.55 0-1 .45-1 1v1h2l3.6 7.59-1.29 2.41c-.34.63-.51 1.35-.51 2.09V20h12v-2.91c0-.74-.17-1.46-.51-2.09l-1.29-2.41L21 4h2V3c0-.55-.45-1-1-1H3z" />
          </svg>
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`flex items-center ${isLiked ? 'text-pink-600' : 'text-gray-500'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
          >
            <path
              d={isLiked ? 
                "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" : 
                "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              }
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
