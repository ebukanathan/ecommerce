import { useState, useEffect } from "react";
import style from "./Allproduct.module.css";
import Productcard from "../Productcard/Productcard";
import Cartcard from "../Cartcard/Cartcard";

function Allproduct() {
  const [allproduct, setAllproduct] = useState([]);
  const [cart, setCart] = useState([]);

  const GetAllproduct = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    console.log(data);
    setAllproduct(data);
    console.log(allproduct);
  };

  useEffect(() => {
    GetAllproduct();
  }, []);

  const handleAddtocart = (item) => {
    // e.preventDefault(),
    cart.includes(item) ? "" : setCart((s) => [...s, item]);
    console.log(cart);
  };

  const handleDelete = (id) => {
    setCart(cart.filter((c) => c.id !== id));
    // console.log(n);
  };

  return (
    <div className={style.container}>
      <h2>All Product</h2>
      <div className={style.allproductgrid}>
        {allproduct.map((item) => (
          <Productcard
            key={item.id}
            picture={item.image}
            title={item.title}
            newPrice={item.price}
            handleAddtocart={() => handleAddtocart(item)}
          />
        ))}
      </div>

      {cart.map((c) => (
        <Cartcard
          key={c.id}
          img={c.image}
          title={c.title}
          price={c.price}
          handleDelete={() => handleDelete(c.id)}
        />
      ))}
    </div>
  );
}

export default Allproduct;
