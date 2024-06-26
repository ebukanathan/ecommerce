import React from "react";

import style from "./Categories.module.css";
import heroImage from "../../../assets/shoppers.webp";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className={style.hero}>
      <ul className={style.sidebar}>
        <li className={style.sidebar__item}>
          <NavLink to="/search/jewelery">Jewelry</NavLink>
        </li>
        <li className={style.sidebar__item}>
          <NavLink to="/search/men's clothing">Men Fashion</NavLink>
        </li>
        <li className={style.sidebar__item}>
          <NavLink to="/search/women's clothing">Women Fashion</NavLink>
        </li>
        <li className={style.sidebar__item}>
          <NavLink to="/search/electronics">ELectronics</NavLink>
        </li>
      </ul>

      <div className="hero__image">
        <img className={style.cat__img} src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default Categories;
