import { useState, useEffect } from "react";
import style from "./Allproduct.module.css";
import Productcard from "../Productcard/Productcard";

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
    setCart((s) => [...s, item]);
    console.log(cart);
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
    </div>
  );
}

export default Allproduct;
