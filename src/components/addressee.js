import React from "react";

function Addressee({ name, clase }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
    console.log(e, "dragstart", e.dataTransfer.getData("id"));
  };
  return (
    <div
      className={`main-form__to__addressee ${clase ? clase : ""}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDrop={(e) => e.stopPropagation()}
      id={`destinatario${name}`}
    >
      <p>{name}</p>
      <span>&times;</span>
    </div>
  );
}

export default Addressee;
