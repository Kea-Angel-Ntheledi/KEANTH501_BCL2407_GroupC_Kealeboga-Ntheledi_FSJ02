import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([
    // Example product data
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul className="mt-4">
        {filteredProducts.map((product, index) => (
          <li key={index} className="py-1">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
