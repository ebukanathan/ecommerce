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
}) {
  const { cart } = useContext(Cartcontext);
  // const [count, setCount] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setCart((s) => ([ ...s, quantity: e.target.value ]));
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

        {/* <input
          type="number"
          value={quantity}
          className={style.quantity}
          onChange={onChange}
        /> */}
        <button className="" onClick={() => handleDecrement()}>
          -
        </button>
        <p className="">{quantity}</p>
        <button className="" onClick={handleIncrement}>
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
