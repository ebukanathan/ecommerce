import React from "react";
import style from "./Nav.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function Nav() {
  return (
    <div className={style.container}>
      <div className={style.nav__left}>
        {/* logo */}
        <div className={style.logo}>
          <h2>Exclusive</h2>
        </div>

        {/* Nav menu */}
        <div>
          <ul className={style.nav__menu}>
            <li className={style.nav__item}>
              <a href="">Home</a>
            </li>
            <li className={style.nav__item}>
              <a href="">Contact</a>
            </li>
            <li className={style.nav__item}>
              <a href="">About</a>
            </li>
            <li className={style.nav__item}>
              <a href="">Signup</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="nav-right"> */}
      {/* search,cart */}

      <div className={style.nav__right}>
        <input
          type="text"
          className="search-input"
          placeholder="what are you looking for"
        />
        <CiHeart />
        <FaShoppingCart />
      </div>
    </div>
    // </div>
  );
}

export default Nav;
