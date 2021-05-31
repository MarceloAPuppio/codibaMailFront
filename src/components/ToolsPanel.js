import React, { useContext } from "react";
import Addressee from "./addressee";
import ContextParameters from "../ContextParameters";
import { computeHeadingLevel } from "@testing-library/dom";
function ToolsPanel() {
  const { DESTINATARIOS, to, setTo } = useContext(ContextParameters);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.stopPropagation();

    let DOMElement = document.getElementById(e.dataTransfer.getData("id"));
    e.target.appendChild(DOMElement);
    e.target.classList.contains("main-form__cc")
      ? DOMElement.classList.add("main-form__to__addressee--otherColor")
      : DOMElement.classList.remove("main-form__to__addressee--otherColor");
  };
  return (
    <aside className="tools-panel">
      <div
        className="tools__contactDraggableContainer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {DESTINATARIOS.codiba.map((mail, index) => {
          return <Addressee info={mail} key={index} />;
        })}
      </div>
    </aside>
  );
}

export default ToolsPanel;
