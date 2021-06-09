import React, { useContext } from "react";
import Addressee from "./addressee";
import ContextParameters from "../ContextParameters";
import { handleDragOver, handleDrop } from "../funciones";
import ItemProduct from "./ItemProduct";
function ToolsPanel() {
  const { DESTINATARIOS, to, setTo, cc, setCc } = useContext(ContextParameters);
  return (
    <aside className="tools-panel">
      <div
        className="tools__contactDraggableContainer"
        onDrop={(e) => handleDrop(e, to, setTo, cc, setCc)}
        onDragOver={(e) => handleDragOver(e)}
      >
        {DESTINATARIOS.codiba.map((mail, index) => {
          return <Addressee info={mail} key={index} />;
        })}
      </div>
      <div className="tools__addProduct">
        <ItemProduct />
      </div>
    </aside>
  );
}

export default ToolsPanel;
