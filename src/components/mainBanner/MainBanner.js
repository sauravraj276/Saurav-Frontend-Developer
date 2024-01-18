import React from "react";
import style from "./MainBanner.module.css";
import scrollDownIcon from "../../assets/icons/scroll_down.svg"
import { scrollToElement } from "../../utils";

export default function MainBanner() {
  return (
    <div className={style.mainbanner}>
      <div className={style.mainText}>
        <div></div>
        <p className={style.mainTitle}>EXPLOREX</p>
        <p className={style.mainDesc}>Discover SpaceX DATA effortlessly with our API-powered site.</p>
      </div>
      <div className={style.scrollDown+" link"}  onClick={() => scrollToElement("searchsection")}>
<p>SCROLL DOWN</p>
<img src={scrollDownIcon}></img>
      </div>
    </div>
  );
}
