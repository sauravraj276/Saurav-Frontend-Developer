import React from "react";
import style from "./SearchBar.module.css";
import searchIcon from '../../assets/icons/search_dark.svg'
import dropIcon from '../../assets/icons/drow_down.svg'

export default function SearchBar() {
  return (
    <div className={style.searchBar}>
      <div className={style.searchDropdown}>
        <p>All</p>
        <img src={dropIcon}></img>
      </div>
      <div className={style.searchInput}>
        <input placeholder="Explore Spacex "></input>
      </div>
      <div className={style.searchAction}>
      <img src={searchIcon}></img>
      </div>
    </div>
  );
}
