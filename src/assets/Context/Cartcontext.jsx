import { createContext, useState } from "react";

export const Cartcontext = createContext();

function Context({ children }) {
  const [cart, setCart] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  //const [prices, setPrices] = useState([]);
  const [itemqty, setItemqty] = useState(1);

  const handleDelete = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  // const [count, setCount] = useState(1);

  // const handleQty = (e, id) => {
  //   e.preventDefault();
  //   cart.map((c) => (c.id == id ? setQuantity(e.target.value) : quantity));
  // };

  // const updateQty = (id) => {
  // single out the require item

  //   const updt = cart.filter((c) => c.id == id);
  //   const updatedItem = { ...updt, quantity: 4 };
  //   setCart((s) => [...s, updatedItem]);
  //   console.log(cart);
  // };

  const handleAddtocart = (item) => {
    let cartId = cart.map((c) => c.id);

    const quantityItem = { ...item, quantity: itemqty };
    console.log(quantityItem);

    cartId.includes(item.id) ? "" : setCart((s) => [...s, quantityItem]);
  };

  const total = cart.reduce((acc, item) => {
    return (acc += Number(item.price) * Number(item.quantity));
  }, 0);
  return (
    <Cartcontext.Provider
      value={{
        cart,
        setCart,
        handleDelete,
        total,
        handleAddtocart,
        // updateQty,

        // quantity,
        // setQuantity,
        itemqty,
        setItemqty,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}

export default Context;
