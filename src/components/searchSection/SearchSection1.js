import React from "react";
import style from "./SearchSection1.module.css";
import SearchBar from "../searchBar/SearchBar";
import ItemCard from "../itemCards/ItemCard";
import { useCapsule } from "../../context/CapsuleContext";

export default function SearchSection1() {
  const capsules = useCapsule();
  return (
    <div className={style.searchSection1} id="searchsection">
      <SearchBar />
      <div className={style.itemsGrid}>
        {capsules.map((capsule) => (
          <ItemCard key={capsule.capsuleSerial} capsule={capsule} />
        ))}
      </div>

      <div className={style.pagenation}>
        <div className={style.pagenationButton}>&lt; Previous</div>
        <div className={style.pagenationButton}>1</div>
        <div className={style.pagenationButton}>2</div>
        <div className={style.pagenationButton}>3</div>
        <div>. . . . </div>
        <div className={style.pagenationButton}>10</div>
        <div className={style.pagenationButton}>12</div>
        <div className={style.pagenationButton}>Next &gt;</div>
      </div>
    </div>
  );
}
