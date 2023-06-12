import React, { useState, useEffect } from 'react';

const PedirPizza = ({ pizza }) => {
  const [pedido, setPedido] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPedido(pizza);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pizza]);

  useEffect(() => {
    console.log('O componente foi atualizado');
  });

  const cancelPedido = () => {
    setPedido(''); 
    alert('Pedido cancelado!'); 
  };

  return (
    <div>
      <h1>Seu pedido:</h1>
      {pedido ? (
        <>
          <h2>{pedido}</h2>
          <button onClick={cancelPedido}>Cancelar pedido</button>
        </>
      ) : (
        <p>Aguardando pedido...</p>
      )}
    </div>
  );
};

export default PedirPizza;