'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Button component that includes navigation and interaction features
export default function Button() {
  const router = useRouter(); // Initialize the router for navigation
  const [isLiked, setIsLiked] = useState(false); // State to manage like status

  // Function to handle navigation back to the previous page
  const handleBack = () => {
    router.back();
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    // Placeholder for cart logic (e.g., updating cart state, making API calls)
    alert('Added to cart!'); // Alert to confirm addition to the cart
  };

  // Function to toggle the like status
  const handleLike = () => {
    setIsLiked(!isLiked); // Toggle the liked state
    // Alert to confirm like or unlike action
    alert(isLiked ? 'Unliked!' : 'Liked!');
  };

  return (
    <div className="flex gap-2"> {/* Container for buttons with gap spacing */}
      {/* Button to navigate back */}
      <button
        onClick={handleBack}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        ← Back
      </button>

      {/* Button to add item to cart */}
      <button
        onClick={handleAddToCart}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>

      {/* Button to like/unlike an item */}
      <button
        onClick={handleLike}
        className={`font-bold py-2 px-4 rounded ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
      >
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
}
