import React from "react";
import style from "./ItemCard.module.css";
import capsuleImage from "../../assets/images/capsule.png";

export default function ItemCard() {
  return (
    <div className={style.itemCard}>
      <img src={capsuleImage}></img>
      <div className={style.cardInfo}>
        <div className={style.idStatus}>
          <p>c101</p>
          <p>retired</p>
        </div>
        <div className={style.itemType}>
          <p>Dragon 1.0</p>
        </div>
        <div className={style.lounchDate}>
          <p>December 8,2010</p>
        </div>
      </div>
    </div>
  );
}
