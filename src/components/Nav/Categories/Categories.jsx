import React from "react";

import style from "./Categories.module.css";
import heroImage from "../../../assets/shoppers.webp";

function Categories() {
  return (
    <div className={style.hero}>
      <ul className={style.sidebar}>
        <li className={style.sidebar__item}>Women&#39s Fashion</li>
        <li className={style.sidebar__item}>Men&#39s Fashion</li>
        <li className={style.sidebar__item}>Electronics</li>
        <li className={style.sidebar__item}>Home and Lifestyle</li>
        <li className={style.sidebar__item}>Sports and Outdoor</li>
        <li className={style.sidebar__item}>Babys and toys</li>
        <li className={style.sidebar__item}>Groceries</li>
        <li className={style.sidebar__item}>Health and Beauty</li>
      </ul>

      <div className="hero__image">
        <img className={style.cat__img} src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default Categories;
