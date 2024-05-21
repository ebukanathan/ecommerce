import { useEffect, useState } from "react";
import Productcard from "../../components/Nav/Productcard/Productcard";
import style from "./Searchpage.module.css";

function Searchpage() {
  const [search, setSearch] = useState([]);

  const getSearch = async () => {
    const api = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const data = await api.json();
    setSearch(data);
    console.log(search);
  };

  useEffect(() => {
    getSearch();
  }, []);
  return (
    <div className={style.allsearchgrid}>
      {search.map((item) => (
        <Productcard
          key={item.id}
          picture={item.image}
          title={item.title}
          newPrice={item.price}
          //   handleAddtocart={() => handleAddtocart(item)}
        />
      ))}
    </div>
  );
}

export default Searchpage;
