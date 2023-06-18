import React, { useEffect, useState } from 'react';
import Card from "./components/Card";
import BeerSearch from './components/BeerSearch';


const Home = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  const getBeers = async () => {
    try {
      const res = await fetch("https://api.punkapi.com/v2/beers");
      const data = await res.json();
      setBeers(data);
      setFilteredBeers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleSearch = (query) => {
    const filtered = beers.filter((beer) => {
      const lowerCaseQuery = query.toLowerCase();
      const beerName = beer.name.toLowerCase();
      const beerId = beer.id.toString();
      return beerName.includes(lowerCaseQuery) || beerId.includes(lowerCaseQuery);
    });
    setFilteredBeers(filtered);
  };

  return (
    <div>
      <h2>Home</h2>
      <BeerSearch onSearch={handleSearch} />
      <div className='grid'>
        {filteredBeers.length ? (
          filteredBeers.map((beer) => <Card data={beer} key={beer.id} />)
        ) : (
          <p>Nenhuma cerveja encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
