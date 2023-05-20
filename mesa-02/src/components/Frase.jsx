import style from './Frase.module.css'

function Frase() {
    return (
        <div className={style.fraseContainer}>
            <h3 className={style.fraseContent}>
            Henrique Bitencourt Ferreira Domene Schneider Schneider!
            </h3>
        </div>
    )
}

export default Frase