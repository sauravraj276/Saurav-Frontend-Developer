import React from "react";
import style from "./Navbar.module.css";
import searchIcon from "../../assets/icons/search_light.svg";
import { scrollToElement } from "../../utils";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <p className={style.navTitle}>EXPLOREX</p>
      <div className={style.navAction + " link"}>
        <img
          src={searchIcon}
          onClick={() => scrollToElement("searchsection")}
        ></img>
      </div>
    </nav>
  );
}
