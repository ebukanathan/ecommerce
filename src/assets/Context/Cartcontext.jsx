import { createContext, useState } from "react";

export const Cartcontext = createContext();

function Context({ children }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  //const [prices, setPrices] = useState([]);

  const handleDelete = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  // const handleQty = (e, id) => {
  //   e.preventDefault();
  //   cart.map((c) => (c.id == id ? setQuantity(e.target.value) : quantity));
  // };

  const updateQty = (id) => {
    // e.preventDefault();
    // const updt = { ...item, quantity: e.target.value };
    // console.log();
    // cart.map((c) => (c.id === item.id ? setCart((s) => [...s, updt]) : c));
    const updt = cart.filter((c) => c.id == id);
    console.log(updt);
  };

  const handleAddtocart = (item) => {
    let cartId = cart.map((c) => c.id);
    const quantityItem = { ...item, quantity: quantity };
    console.log(quantityItem);

    cartId.includes(item.id) ? "" : setCart((s) => [...s, quantityItem]);
  };

  const total = cart.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  return (
    <Cartcontext.Provider
      value={{
        cart,
        setCart,
        handleDelete,
        total,
        handleAddtocart,

        quantity,
        setQuantity,
        updateQty,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}

export default Context;
