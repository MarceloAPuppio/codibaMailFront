import React from "react";
import FormMailer from "./FormMailer";
import MainPanelBotonera from "./MainPanelBotonera";
// import Addressee from "./addressee";
function Main() {
  return (
    <section className="main-panel">
      <MainPanelBotonera />
      <FormMailer />
    </section>
  );
}

export default Main;
