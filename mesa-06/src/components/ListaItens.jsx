import { useState } from 'react';

function ListaItens() {
  const [itens, setItens] = useState([]);
  const [contador, setContador] = useState(1);

  const adicionarItem = () => {
    const novoItem = `O item ${contador} foi adicionado com suesso!`;
    setItens([...itens, novoItem]);
    setContador(contador + 1);
  };

  return (
    <>
    
      <button onClick={adicionarItem}>Adicionar Item</button>
      
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
     
    </>
  );
}

export default ListaItens;