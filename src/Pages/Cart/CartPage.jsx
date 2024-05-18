import React, { useContext } from "react";

import style from "./CartPage.module.css";
import Cartcard from "../../components/Nav/Cartcard/Cartcard";
import { Cartcontext } from "../../assets/Context/Cartcontext";
import { RiH3 } from "react-icons/ri";

function CartPage() {
  const { cart, handleDelete, total, setCart } = useContext(Cartcontext);

  return (
    <div>
      <h4 className="">Cart</h4>
      <div className={style.cart__wrapper}>
        {cart == 0 ? (
          <h3>No Item in Cart</h3>
        ) : (
          cart.map((c) => (
            <Cartcard
              key={c.id}
              img={c.image}
              title={c.title}
              price={c.price}
              handleDelete={() => handleDelete(c.id)}
            />
          ))
        )}
      </div>
      <div className={style.cart__total}>
        <h4>Total :</h4>
        {cart.length > 0 ? <div className={style.fig}>${total}</div> : ""}
      </div>
      <div>
        {cart.length > 0 ? (
          <button className={style.checkout}>Proceed to checkout</button>
        ) : (
          ""
        )}
      </div>
      <div>
        {cart.length > 0 ? (
          <button className={style.clear__cart} onClick={() => setCart([])}>
            Clear Cart
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CartPage;
