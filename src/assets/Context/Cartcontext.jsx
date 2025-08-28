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

  const handleAddtocart = (product) => {
    setCart((prev) => {
      const existing = prev.find((n) => n.id == product.id);
      if (existing) {
        return prev.map((n) =>
          n.id === product.id ? { ...n, quantity: n.quantity + 1 } : n
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  console.log(cart);

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
