import { createContext, useEffect, useState } from "react";

export const Cartcontext = createContext();

function Context({ children }) {
  const [cart, setCart] = useState([]);
  //const [prices, setPrices] = useState([]);

  const handleDelete = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };
  // useEffect(() => {
  //   cart.map((c) => setPrices([...prices, c.price]));
  // }, []);

  // const handleSum = () => {
  //   setPrices(cart.map((c) => [...prices, c.price]));
  //   console.log(prices);
  // };

  const total = cart.reduce((acc, item) => {
    return (acc += Number(item.price));
  }, 0);
  return (
    <Cartcontext.Provider value={{ cart, setCart, handleDelete, total }}>
      {children}
    </Cartcontext.Provider>
  );
}

export default Context;
