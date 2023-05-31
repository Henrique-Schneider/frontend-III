import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';
import Form from './components/form/Form';


function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [card, setCard] = useState({});


  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value)
  }

  const handleButtonClick = (event) => {

    event.preventDefault()

    setCard(
      {
        title: title,
        imgUrl: imgUrl
      }
    );

  }

  return (
    <>
    <Form/>
    </>
  )
}

export default App