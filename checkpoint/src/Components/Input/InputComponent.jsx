import React from 'react';
import style from "./InputComponent.module.css";

function InputComponent({ title, type, value, fnOnChange,placeholder  }) {
  return (
    <>
      <label className={style.label}>{title ?? "Indefinido"}</label>
      <br />

      <input
        className={style.input}
        type={type ?? "text"}
        value={value}
        onChange={fnOnChange}
        placeholder={placeholder}
      />
      <br />
    </>
  );
}

export default InputComponent;