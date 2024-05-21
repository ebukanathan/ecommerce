import { useState, useEffect, useContext } from "react";
import style from "./Allproduct.module.css";
import Productcard from "../Productcard/Productcard";
import Cartcard from "../Cartcard/Cartcard";
import { Cartcontext } from "../../../assets/Context/Cartcontext";

function Allproduct() {
  const [allproduct, setAllproduct] = useState([]);

  const { cart, setCart, handleAddtocart } = useContext(Cartcontext);

  const GetAllproduct = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    console.log(data.length);
    setAllproduct(data);
    console.log(allproduct);
  };

  useEffect(() => {
    GetAllproduct();
  }, []);

  console.log(allproduct);

  // const handleAddtocart = (item) => {
  //   cart.includes(item) ? "" : setCart((s) => [...s, item]);
  //   console.log(cart);
  // };

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
