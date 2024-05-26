import React, { useContext, useState } from "react";
import style from "./Productcard.module.css";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Cartcontext } from "../../../assets/Context/Cartcontext";
// import trouser from "../../../assets/trouser.webp";

function Productcard({ picture, title, newPrice, handleAddtocart, qty }) {
  const { quantity, setQuantity } = useContext(Cartcontext);
  // const [count,setCount] = useState()

  const handleUpdate = (e) => {
    setQuantity(e.target.value);
  };

  // const decrement = (e) => {
  //   e.preventDefault();
  //   setCount((c) => c - 1);
  // };
  return (
    <>
      <div className={style.card__container}>
        <div className={style.image__holder}>
          <img src={picture} alt="" />
          <div className={style.discount}>-10%</div>
          <div className={style.heart}>
            <FaRegHeart />
          </div>
          <div className={style.preview}>
            <IoEyeSharp />
          </div>

          <div className={style.additem} onClick={handleAddtocart}>
            add to cart
          </div>
        </div>
        <div className={style.details}>
          <h6 className={style.productname}>
            {/* {title.substring(0, 40) + "..."} */}
            {title.length > 40 ? title.substring(0, 40) + "..." : title}
          </h6>
          <div className={style.price}>
            <div className={style.new__price}>${newPrice}</div>
            {/* <div className={style.old__price}>{oldPrice}</div> */}
            {/* <input type="number" value={qty} onChange={handleUpdate} /> */}
            {/* <div className={style.count}>
              <button className="" onClick={() => setQuantity((c) => c - 1)}>
                -
              </button>
              <div className="">{quantity}</div>
              <button className="" onClick={() => setQuantity((c) => c + 1)}>
                +
              </button>
            </div>
          </div> */}
            {/* <div className={style.reviews}>{rating}</div> */}

            <button className={style.mobile__button} onClick={handleAddtocart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
