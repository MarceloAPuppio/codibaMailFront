import React from "react";

function Addressee({ name, clase }) {
  return (
    <div className={`main-form__to__addressee ${clase}`}>
      <p>{name}</p>
      <span>&times;</span>
    </div>
  );
}

export default Addressee;
