"use client";
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);  // Call the parent's search handler
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();  // Search when Enter is pressed
    }
  };

  return (
    <div className="search-bar flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}  // Add key press handler
        className="border rounded p-2 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
