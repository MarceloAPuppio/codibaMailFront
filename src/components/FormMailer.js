import React, { useContext } from "react";
import ContextParameter from "../ContextParameters";
function FormMailer() {
  const { to, setTo, cc, setCc } = useContext(ContextParameter);
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    let objeto = e.dataTransfer.getData("object");
    console.log(objeto);
    let DOMElement = document.getElementById(e.dataTransfer.getData("id"));
    e.target.appendChild(DOMElement);
    if (e.target.classList.contains("main-form__cc")) {
      DOMElement.classList.add("main-form__to__addressee--otherColor");
      setCc([...cc, JSON.parse(objeto)]);
    } else {
      DOMElement.classList.remove("main-form__to__addressee--otherColor");
      setTo([...to, JSON.parse(objeto)]);
    }
  };
  return (
    <form action="" className="main-panel__form">
      <div className="main-form__from">
        <picture className="from__picture">
          <img
            className="picture__img"
            src="https://source.unsplash.com/random/80x80"
            alt="perfil"
          />
        </picture>
        <h2>Marcelo Puppio</h2>
      </div>
      <div
        className="main-form__to"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div
        className="main-form__cc"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div className="main-form__body">
        {/* <input type="text" value="Marcos" />
          <input type="text" value="Te paso un pedido para CIBA - MACACHIN." /> */}

        <ul>
          <li>skdlds</li>
        </ul>
      </div>
      <div className="main-form__attachment"></div>
      <div className="main-form__submit">
        <button className="submit__btn">Send message</button>
      </div>
    </form>
  );
}

export default FormMailer;
