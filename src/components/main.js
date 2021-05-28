import React from "react";
import Addressee from "./addressee";
function Main() {
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
        <div className="main-form__to">
          <Addressee name="Marcos" />
          <Addressee name="Marcos" />
        </div>
        <div className="main-form__cc">
          <Addressee
            name="Marcos"
            clase="main-form__to__addressee--otherColor"
          />
          <Addressee
            name="Marcos"
            clase="main-form__to__addressee--otherColor"
          />
          <Addressee
            name="Marcos"
            clase="main-form__to__addressee--otherColor"
          />
          <Addressee
            name="Marcos"
            clase="main-form__to__addressee--otherColor"
          />
          <Addressee
            name="Marcos"
            clase="main-form__to__addressee--otherColor"
          />
        </div>
        <div className="main-form__body"></div>
        <div className="main-form__attachment"></div>
        <div className="main-form__submit">
          <button className="submit__btn">Send message</button>
        </div>
      </form>
    </section>
  );
}

export default Main;
