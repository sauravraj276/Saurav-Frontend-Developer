import React from "react";
import style from "./SearchBar.module.css";
import searchIcon from "../../assets/icons/search_dark.svg";
import dropIcon from "../../assets/icons/drow_down.svg";

export default function SearchBar() {
  return (
    <div className={style.searchBar}>
      <div className={style.searchDropdown}>
        <select name="cars" id="cars">
          <option value="all">All</option>
          <option value="status">Status</option>
          <option value="type">Type</option>
          <option value="original_Lounch">Original Lounch</option>
        </select>
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
