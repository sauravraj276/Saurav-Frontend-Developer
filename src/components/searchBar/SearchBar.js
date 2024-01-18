import React, { useState } from "react";
import style from "./SearchBar.module.css";
import searchIcon from "../../assets/icons/search_dark.svg";
import { useCapsule } from "../../context/CapsuleContext";

const SearchBar = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const {capsules, searchCapsules} = useCapsule();

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    searchCapsules(selectedFilter,searchInput);

  };

  return (
    <div className={style.searchBar}>
      <div className={style.searchDropdown}>
        <select name="filter" onChange={handleFilterChange} value={selectedFilter}>
          <option value="all">All</option>
          <option value="capsule_serial">Capsule Serial</option>
          <option value="capsule_id">Capsule ID</option>
          <option value="status">Status</option>
        </select>
      </div>
      <div className={style.searchInput}>
        <input
          placeholder="Explore SpaceX data"
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      <div className={style.searchAction} onClick={handleSearch}>
        <img src={searchIcon} alt="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
