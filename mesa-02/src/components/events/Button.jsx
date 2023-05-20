import './Button.css'
function Button(props) {
  return <button onClick={props.event}>{props.text}</button> //no caso de codigos simples de uma linha posso usar sem os parenteses
}

export default Button