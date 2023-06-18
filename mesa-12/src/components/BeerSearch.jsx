import React, { useState } from 'react';

const BeerSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o ID ou nome da cerveja"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default BeerSearch;
