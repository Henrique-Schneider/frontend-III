import React, { useState } from 'react';
import CardComponent from '../Card/CardComponent';
import InputComponent from '../Input/InputComponent';
import Styles from './Form.module.css';

const Form = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleChangeCoverImage = (event) => {
    setCoverImage(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
  
    if (id.trim().length < 3) {
      setErrorMessage('O ID deve conter pelo menos 3 números.');
      return;
    }
  
    if (title.trim().length < 6) {
      setErrorMessage('O título deve conter pelo menos 6 letras.');
      return;
    }
  
    if (author.trim().length === 0 || coverImage.trim().length === 0) {
      setErrorMessage('Por favor, preencha todos os campos do formulário.');
      return;
    }
  
    const newBook = {
      id: id,
      title: title,
      author: author,
      coverImage: coverImage
    };
  
    setBooks([...books, newBook]);
    setId('');
    setTitle('');
    setAuthor('');
    setCoverImage('');
    setErrorMessage('');
  };

  return (
    <>
      <h2>Lista de Livros</h2>

      <form className={Styles['form-container']}>
        <InputComponent
          title="ID"
          type="text"
          value={id}
          fnOnChange={handleChangeId}
          placeholder="ID | Deve Conter 3 números..."
        />

        <InputComponent
          title="Título"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
          placeholder="Título do livro | Pelo menos 6 letras..."
        />

        <InputComponent
          title="Autor"
          type="text"
          value={author}
          fnOnChange={handleChangeAuthor}
          placeholder="Autor do livro |"
        />

        <InputComponent
          title="URL"
          type="url"
          value={coverImage}
          fnOnChange={handleChangeCoverImage}
          placeholder="URL da capa do livro"
        />

        <button onClick={handleButtonClick}>Salvar</button>
      </form>

      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}

      <div className={Styles['card-container']}>
        {books.map((book, index) => (
          <CardComponent
            key={index}
            id={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
          />
        ))}
      </div>
    </>
  );
};

export default Form;