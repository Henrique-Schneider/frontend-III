import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [comments, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setComentarios(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchComments();
  }, []);

  const handleNovoComentarioChange = (event) => {
    setNovoComentario(event.target.value);
  };

  const handleAddComentario = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
        body: novoComentario,
      });
      setComentarios((prevComments) => [...prevComments, response.data]);
      setNovoComentario('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Comentários</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
      <h2>Novo Comentário</h2>
      <input type="text" value={novoComentario} onChange={handleNovoComentarioChange} />
      <button onClick={handleAddComentario}>Adicionar</button>
    </div>
  );
}

export default App;
