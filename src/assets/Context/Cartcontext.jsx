import { createContext, useState } from "react";

export const Cartcontext = createContext();

function Context({ children }) {
  const [cart, setCart] = useState([]);
  //const [prices, setPrices] = useState([]);

  const handleDelete = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const handleAddtocart = (item) => {
    let cartId = cart.map((c) => c.id);
    cartId.includes(item.id) ? "" : setCart((s) => [...s, item]);
  };

  const total = cart.reduce((acc, item) => {
    return (acc += Number(item.price));
  }, 0);
  return (
    <Cartcontext.Provider
      value={{ cart, setCart, handleDelete, total, handleAddtocart }}
    >
      {children}
    </Cartcontext.Provider>
  );
}

export default Context;
