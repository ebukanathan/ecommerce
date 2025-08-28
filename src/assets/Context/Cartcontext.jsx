import { createContext, useState } from "react";

export const Cartcontext = createContext();

function Context({ children }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleDelete = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const updateQty = (id, value) => {
    //single out the require item
    cart.map((c) => {
      if (c.id == id) {
        console.log(`quantity is ${c.quantity + value} `);
      }
    });
  };

  const handleAddtocart = (item) => {
    // let cartId = cart.map((c) => c.id);
    // console.log(cartId);
    // const quantityItem = { ...item, quantity: 1 };
    // console.log(quantityItem);
    // cartId.includes(item.id) ? "" : setCart((s) => [...s, quantityItem]);
    const existing = cart.find((n) => n.id == item.id);

    if (existing) {
      return cart.map((n) =>
        n.id === item.id
          ? setCart((prev) => [...prev, { ...item, quantity: quantity + 1 }])
          : item
      );
    }

    setCart((prev) => [...prev, { ...item, quantity: 1 }]);

    console.log(cart);
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
        updateQty,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}

export default Context;
