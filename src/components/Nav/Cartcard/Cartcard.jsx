import { useContext, useState } from "react";
import style from "./Cartcard.module.css";
import { Cartcontext } from "../../../assets/Context/Cartcontext";

function Cartcard({
  img,
  title,
  price,
  value,
  quantity,
  handleDelete,
  handleDecrement,
  handleIncrement,
}) {
  const { cart } = useContext(Cartcontext);

  return (
    <div>
      <div className={style.container}>
        <div className={style.description}>
          <img src={img} alt="" className={style.cartimg} />
          <h6 className={style.title}>{title}</h6>
        </div>
        {/* <input type="number" className={style.quantity} min={1} value={value} /> */}

        <button className="" onClick={() => handleDecrement()}>
          -
        </button>
        <p className="">{quantity}</p>
        <button className="" onClick={() => handleIncrement()}>
          +
        </button>

        <div className={style.subtotal}>{price}</div>
        <h4 className={style.qty}>{quantity}</h4>
        <button className={style.delete} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cartcard;
