import { useContext, useState } from "react";
import style from "./Cartcard.module.css";
import { Cartcontext } from "../../../assets/Context/Cartcontext";

function Cartcard({ img, title, price, value, qty, handleDelete }) {
  const { quantity, setQuantity } = useContext(Cartcontext);

  const handleIncrement = () => {
    setQuantity((c) => c + 1);
  };

  const handleDecrement = () => {
    setQuantity((c) => c - 1);
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.description}>
          <img src={img} alt="" className={style.cartimg} />
          <h6 className={style.title}>{title}</h6>
        </div>
        {/* <input type="number" className={style.quantity} min={1} value={value} /> */}
        <div className={style.quantity}>
          <button onClick={handleDecrement}>-</button>
          <button>{quantity}</button>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className={style.subtotal}>{price}</div>
        <h4 className={style.qty}>{qty}</h4>
        <button className={style.delete} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cartcard;
