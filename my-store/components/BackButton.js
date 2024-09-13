'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Button() {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  // Handle navigation back
  const handleBack = () => {
    router.back();
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    // Add your cart logic here
    alert('Added to cart!');
  };

  // Handle like button
  const handleLike = () => {
    setIsLiked(!isLiked);
    // Add your like logic here
    alert(isLiked ? 'Unliked!' : 'Liked!');
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleBack}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        ← Back
      </button>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
      <button
        onClick={handleLike}
        className={`font-bold py-2 px-4 rounded ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
      >
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
}
