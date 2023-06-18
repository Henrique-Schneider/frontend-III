import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Beer = () => {
  const navigate = useNavigate();
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  const getBeer = async () => {
    try {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data = await res.json();
      setBeer(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1); // Navega para a página anterior
  };

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cerveja número: {beer.id}</h2>
      <div className="card">
        <img src={beer.image_url} alt="beer-detail" />
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
        <p>{beer.brewers_tips}</p>
      </div>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default Beer;
