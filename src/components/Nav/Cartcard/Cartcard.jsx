import { useContext, useState } from "react";
import style from "./Cartcard.module.css";
import { Cartcontext } from "../../../assets/Context/Cartcontext";

function Cartcard({ img, title, price, value, qty, handleDelete, onChange }) {
  const { quantity, handleQty } = useContext(Cartcontext);
  // const [count, setCount] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setCart((s) => ([ ...s, quantity: e.target.value ]));
  //   console.log(cart);
  // };

  // const handleIncrement = (e) => {
  //   e.preventDefault();
  //   setQuantity((c) => c + 1);
  // };

  // const handleDecrement = (e) => {
  //   e.preventDefault();
  //   setQuantity((c) => c - 1);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setCart((s) => ({ ...s, quantity: count }));
  //   console.log(cart);
  // };

  return (
    <div>
      <div className={style.container}>
        <div className={style.description}>
          <img src={img} alt="" className={style.cartimg} />
          <h6 className={style.title}>{title}</h6>
        </div>
        {/* <input type="number" className={style.quantity} min={1} value={value} /> */}
        <form className={style.quantity}>
          <input
            type="text"
            value={quantity}
            className=""
            onChange={onChange}
          />
        </form>
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
