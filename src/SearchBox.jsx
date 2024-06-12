import React, { useState } from 'react';

const SearchBox = ({ searchTasks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchTasks(e.target.value);
  };

  // Search box 
  return (
    <input
          type="text"
          placeholder="Search Tasks"
          value={searchTerm}
          onChange={handleSearch} />
  );
};

export default SearchBox;
