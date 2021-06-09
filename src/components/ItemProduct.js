import React, { useRef } from "react";
import { MdAddShoppingCart } from "react-icons/md";
function ItemProduct() {
  const products = [
    { cod: 43144, name: "Sal fina seca x 25 kg", bolsasPallet: 50 },
    { cod: 42162, name: "Sal entrefina seca x 25 kg", bolsasPallet: 50 },
    { cod: 41157, name: "Sal gruesa seca x 25 kg", bolsasPallet: 50 },
    { cod: 31110, name: "Sal gruesa lavada x 50 kg", bolsasPallet: 24 },
    { cod: 32115, name: "Sal entrefina lavada x 50 kg", bolsasPallet: 24 },
  ];
  const inputNumber = useRef(null);
  const handleOnChange = (e) => {
    inputNumber.current.value = "";
    //De esta manera se logra que los numeros del input sean múltiplos de la cantidad de bolsas por pallet
    //👌aquí definimos los steps
    inputNumber.current.setAttribute(
      "step",
      products.find((item) => item.cod === +e.target.value)?.bolsasPallet || 1
    );

    !products.find((prod) => prod.cod === +e.target.value)
      ? e.target.setCustomValidity("cód de prod inválido")
      : e.target.setCustomValidity("");
  };
  return (
    <>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="add-product__form"
      >
        <label htmlFor="product" className="add-product__label">
          <input
            placeholder="Código"
            list="products"
            name="product"
            id="product"
            onChange={handleOnChange}
            required
            className="add-product__input"
          />
          <span className="add-product__span">Código</span>
          <datalist id="products">
            {products.map((prod, key) => (
              <option value={prod.cod} title={prod.name} key={key} />
            ))}
          </datalist>
        </label>
        <label htmlFor="number" className="add-product__label">
          <input
            ref={inputNumber}
            type="number"
            name=""
            id=""
            min="0"
            step="50"
            required
            placeholder="Cantidad"
            className="add-product__input"
          />
          <span className="add-product__span">Número</span>
        </label>
        <button className="add-product__button">
          <MdAddShoppingCart />
        </button>
      </form>
    </>
  );
}

export default ItemProduct;
