import { useContext, useEffect, useState } from "react";
import Productcard from "../../components/Nav/Productcard/Productcard";
import style from "./Searchpage.module.css";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../../assets/Context/Cartcontext";

function Searchpage() {
  const [search, setSearch] = useState([]);

  const { handleAddtocart } = useContext(Cartcontext);

  const params = useParams();

  const getSearch = async (name) => {
    const api = await fetch(
      `https://fakestoreapi.com/products/category/${name}`
    );
    const data = await api.json();
    setSearch(data);
    // console.log(search);
  };

  useEffect(() => {
    getSearch(params.type);
  }, []);
  return (
    <div className={style.allsearchgrid}>
      {search.map((item) => (
        <Productcard
          key={item.id}
          picture={item.image}
          title={item.title}
          newPrice={item.price}
          handleAddtocart={() => handleAddtocart(item)}
        />
      ))}
    </div>
  );
}

export default Searchpage;
