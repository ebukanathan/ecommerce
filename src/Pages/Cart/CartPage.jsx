import { useContext } from "react";

import style from "./CartPage.module.css";
import Cartcard from "../../components/Nav/Cartcard/Cartcard";
import { Cartcontext } from "../../assets/Context/Cartcontext";
import { NavLink } from "react-router-dom";

function CartPage() {
  const { cart, handleDelete, total, updateQty } = useContext(Cartcontext);

  const handleIncrement = (id, value) => {
    cart.map((item) => {
      if (item.id == id) {
        console.log({ ...item, quantity: item.quantity + value });
      } else {
        return { item };
      }
    });
  };

  const handleDecrement = (id) => {
    cart.map((item) => {
      if (item.id === id) {
        console.log({ ...item, quantity: item.quantity - 1 });
      } else {
        return item;
      }
    });
  };

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
              quantity={c.quantity}
              handleDecrement={() => updateQty(c.id, 1)}
              handleIncrement={() => handleIncrement(c.id, 1)}
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
            <button className={style.checkout}>Proceed to payment</button>
          ) : (
            ""
          )}
        </div>
        <div>
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
