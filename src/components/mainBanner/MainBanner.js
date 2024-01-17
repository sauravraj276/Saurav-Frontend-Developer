import React from "react";
import style from "./MainBanner.module.css";

export default function MainBanner() {
  return (
    <div className={style.mainbanner}>
      <div className={style.mainText}>
        <p className={style.mainTitle}>EXPLOREX</p>
        <p className={style.mainDesc}>Discover SpaceX DATA effortlessly with our API-powered site.</p>
      </div>
      <div className="scrollDown"></div>
    </div>
  );
}
