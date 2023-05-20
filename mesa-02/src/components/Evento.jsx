import Button from './events/Button'

function Evento() {
    function meuEvento() {
     console.log(`Ativando o primeiro evento!`)
     
    }
    function segundoEvento(){
        console.log("Ativando segundo evento!")
    }
     return(
         <div>
             <p>
                 Clique para disparar um evento:
             </p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
            
         </div>
     )
 }
 export default Evento