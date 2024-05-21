import React, { useContext } from "react";

import style from "./CartPage.module.css";
import Cartcard from "../../components/Nav/Cartcard/Cartcard";
import { Cartcontext } from "../../assets/Context/Cartcontext";
import { NavLink } from "react-router-dom";

function CartPage() {
  const { cart, handleDelete, total } = useContext(Cartcontext);

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
        {cart.length > 0 ? (
          <div className={style.fig}>Total : ${total}</div>
        ) : (
          ""
        )}
      </div>
      <div className={style.cart__actions}>
        <div>
          {cart.length > 0 ? (
            <button className={style.checkout}>Proceed to checkout</button>
          ) : (
            ""
          )}
        </div>
        <div>
          {/* {cart.length > 0 ? (
            <button className={style.clear__cart} onClick={() => setCart([])}>
              Clear Cart
            </button>
          ) : (
            ""
          )} */}
          <NavLink to={"/"}>
            {cart.length > 0 ? (
              <button className={style.clear__cart}>Continue Shopping</button>
            ) : (
              ""
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
