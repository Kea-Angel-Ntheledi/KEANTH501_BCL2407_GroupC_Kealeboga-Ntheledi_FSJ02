// app/layout.js
"use client";
import NavBar from '@components/NavBar';
import SearchBar from '@components/SearchBar';
import FilterDropdown from '@components/FilterDropdown';
import SortDropdown from '@components/SortDropdown';
import { useState } from 'react';
import './globals.css';

export default function RootLayout({ items = [] }) { // Default to an empty array
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  const categories = ['Clothing', 'Electronics', 'Accessories']; // Example categories

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (category) => {
    setCategoryFilter(category);
  };

  const handleSort = (sortBy) => {
    setSortCriteria(sortBy);
  };

  // Function to filter and sort the items
  const getFilteredAndSortedItems = () => {
    let filteredItems = items;

    if (categoryFilter) {
      filteredItems = filteredItems.filter(item => item.category === categoryFilter);
    }

    if (searchTerm) {
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortCriteria === 'asc') {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === 'desc') {
      filteredItems.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filteredItems;
  };

  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="flex space-x-4 p-4">
          <SearchBar onSearch={handleSearch} />
          <FilterDropdown categories={categories} onFilter={handleFilter} />
          <SortDropdown onSort={handleSort} />
        </div>
        <main>
          <div>
            {getFilteredAndSortedItems().length === 0 ? (
              <p>No items found.</p>
            ) : (
              getFilteredAndSortedItems().map(item => (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.category}</p>
                </div>
              ))
            )}
          </div>
        </main>
      </body>
    </html>
  );
}
