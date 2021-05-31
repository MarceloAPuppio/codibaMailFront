import React from "react";

function Addressee({ info }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
    e.dataTransfer.setData("object", JSON.stringify(info));
    console.log(e, "dragstart", e.dataTransfer.getData("id"));
  };
  console.log(info);
  return (
    <div
      className="main-form__to__addressee"
      draggable="true"
      onDragStart={handleDragStart}
      onDrop={(e) => e.stopPropagation()}
      id={`destinatario${info.shortName}`}
    >
      <p>{info.shortName}</p>
      <span>&times;</span>
    </div>
  );
}

export default Addressee;
