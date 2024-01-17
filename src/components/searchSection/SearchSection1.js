import React from "react";
import style from "./SearchSection1.module.css";
import SearchBar from "../searchBar/SearchBar";
import ItemCard from "../itemCards/ItemCard";

export default function SearchSection1() {
  return (
    <div className={style.searchSection1}>
      <SearchBar />
      <div className={style.itemsGrid}>
        {Array(10)
          .fill()
          .map((_, index) => (
            <ItemCard />
          ))}
      </div>
    </div>
  );
}
