import React from "react";
import style from "./Productcard.module.css";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import trouser from "../../../assets/trouser.webp";

function Productcard() {
  return (
    <>
      <div className={style.card__container}>
        <div className={style.image__holder}>
          <img src={trouser} alt="" />
          <div className={style.discount}>-10%</div>
          <div className={style.heart}>
            <FaRegHeart />
          </div>
          <div className={style.preview}>
            <IoEyeSharp />
          </div>

          <div className={style.additem}>add to cart</div>
        </div>
        <div className={style.details}>
          <h3 className={style.productname}>trouser</h3>
          <div className={style.price}>
            <div className={style.new__price}>$10</div>
            <div className={style.old__price}>$15</div>
          </div>
          <div className={style.reviews}>stars</div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
