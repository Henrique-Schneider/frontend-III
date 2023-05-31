import { useState } from "react";
function ButtonClick() {

  

  //let click = 0;
  // const contadorDeClicks = () => {
  //   console.log("usuario clicou!");
  //   click = click + 1;
  //   console.log(click);

  //   document.getElementById("click").innerText = `Número de clicks: ${click}`;
  // };

  const [click, setClick] = useState(0);
  const contadorDeClicks = () =>{
    console.log("Usuario clicou!!")

  setClick(click +1) // função que atualiza o estado de clicks
  console.log(click);
  }
  return (
    <>
      <h4 id="click">Número de clicks: {click}</h4>
      <button onClick={contadorDeClicks}>Clique aqui!</button>
    </>
  );
}

export default ButtonClick;
