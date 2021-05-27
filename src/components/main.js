import React from "react";
import Addressee from "./addressee";
function Main() {
  return (
    <section className="main-panel">
      <div className="main-panel__botonera">
        <i class="fas fa-save"></i>
        <i class="fas fa-print"></i>
        <i class="fas fa-trash-alt"></i>
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
        <div className="main-form__to">
          <Addressee name="Marcos" />
          <Addressee name="Marcos" />
          <Addressee name="Marcos" />
          <Addressee name="Marcos" />
          <Addressee name="Marcos" />
        </div>
        <div className="main-form__cc">Cc:</div>
        <div className="main-form__body"></div>
        <div className="main-form__attachment"></div>
        <div className="main-form__submit">
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
}

export default Main;
