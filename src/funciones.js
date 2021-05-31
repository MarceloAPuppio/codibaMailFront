const eliminarDelArregloByMail = (arreglo, mail) => {
  let copyTo = [...arreglo];
  let indice = copyTo.findIndex((to) => to.mail === mail);
  console.log(indice);
  if (indice === -1) return [...copyTo];
  copyTo.splice(indice, 1);
  return [...copyTo];
};

const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e, to, setTo, cc, setCc) => {
  e.stopPropagation();
  let { mail } = JSON.parse(e.dataTransfer.getData("object"));
  let DOMElement = document.getElementById(e.dataTransfer.getData("id"));
  e.target.appendChild(DOMElement);
  DOMElement.classList.remove("main-form__to__addressee--otherColor");
  setTo(eliminarDelArregloByMail(to, mail));
  setCc(eliminarDelArregloByMail(cc, mail));
};
export { eliminarDelArregloByMail, handleDragOver, handleDrop };
