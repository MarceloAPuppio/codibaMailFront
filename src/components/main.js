import React from "react";
// import Addressee from "./addressee";
function Main() {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    let DOMElement = document.getElementById(e.dataTransfer.getData("id"));
    e.target.appendChild(DOMElement);
    e.target.classList.contains("main-form__cc")
      ? DOMElement.classList.add("main-form__to__addressee--otherColor")
      : DOMElement.classList.remove("main-form__to__addressee--otherColor");
  };
  return (
    <section className="main-panel">
      <div className="main-panel__botonera">
        <span className="botonera__iconWrapper">
          <i class="fas fa-save"></i>
        </span>
        <span className="botonera__iconWrapper">
          <i class="fas fa-print"></i>
        </span>
        <span className="botonera__iconWrapper">
          <i class="fas fa-trash-alt"></i>
        </span>
      </div>
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
    </section>
  );
}

export default Main;
