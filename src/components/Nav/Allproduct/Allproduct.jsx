import { useState, useEffect, useContext } from "react";
import style from "./Allproduct.module.css";
import Productcard from "../Productcard/Productcard";
import Cartcard from "../Cartcard/Cartcard";
import { Cartcontext } from "../../../assets/Context/Cartcontext";

function Allproduct() {
  const [allproduct, setAllproduct] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const { cart, handleAddtocart } = useContext(Cartcontext);

  const GetAllproduct = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    if (data) {
      setIsloading(false);
    }
    setAllproduct(data);
    // console.log(allproduct);
  };

  useEffect(() => {
    GetAllproduct();
  }, []);

  console.log(cart);

  return (
    <div className={style.container}>
      <h2>All Product</h2>
      <div className={style.allproductgrid}>
        {isloading && <Loading />}
        {!isloading &&
          allproduct.map((item) => (
            <Productcard
              key={item.id}
              picture={item.image}
              title={item.title}
              newPrice={item.price}
              handleAddtocart={() => handleAddtocart(item)}
              qty={item.quantity}
            />
          ))}
      </div>
    </div>
  );
}

export function Loading() {
  return (
    <div className="">
      <h3 className="">Loading...</h3>
    </div>
  );
}

export default Allproduct;
