import React from 'react';
import styles from "./CardComponent.module.css";

function CardComponent(props) {
  const imgUrlDefault = "https://m.media-amazon.com/images/I/41V-6PYI5bL.jpg";

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>ID: {props.id ?? "Indefinido"}</h2>
      <h2 className={styles.title}>Título: {props.title ?? "Indefinido"}</h2>
      <h2 className={styles.title}>Autor: {props.author ?? "Indefinido"}</h2>
      <img className={styles.image} src={props.coverImage ?? imgUrlDefault} alt="Capa do Livro" />
    </div>
  );
}

export default CardComponent;