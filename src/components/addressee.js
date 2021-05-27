import React from "react";

function Addressee({ name }) {
  return (
    <div className="main-form__to__addressee">
      <p>{name}</p>
      <span>&times;</span>
    </div>
  );
}

export default Addressee;
