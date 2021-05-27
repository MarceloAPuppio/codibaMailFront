import React from "react";

function Main() {
  return (
    <section className="main-panel">
      <div className="main-panel__botonera"></div>
      <form action="" className="main-panel__form">
        <div className="main-form__from">
          <picture>
            <img src="https://source.unsplash.com/random/50x50" alt="perfil" />
          </picture>
          <h4>Marcelo Puppio</h4>
        </div>
        <div className="main-form__to"></div>
        <div className="main-form__cc"></div>
        <div className="main-form__body"></div>
        <div className="main-form__attachment"></div>
        <div className="main-form__submit"></div>
      </form>
    </section>
  );
}

export default Main;
