import React from "react";
import style from "./SearchSection1.module.css";
import SearchBar from "../searchBar/SearchBar";
import ItemCard from "../itemCards/ItemCard";
import { useCapsule } from "../../context/CapsuleContext";
import { scrollToElement } from "../../utils";

export default function SearchSection1() {
  const { pageCapsules, totalPages, currentPage, setCurrentPage, loading,error } =
    useCapsule();

  const navigateToPage = (page) => {
    if (page >= 1 && page <= totalPages && currentPage !== page) {
      setCurrentPage(page);
      scrollToElement("searchsection");
    }
  };

  return (
    <div className={style.searchSection1} id="searchsection">
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) :error!==""?
      <div className="error-container">{error}</div>
      : (
        <>
          <SearchBar />
          <div className={style.itemsGrid}>
            {pageCapsules.map((capsule) => (
              <ItemCard key={capsule.capsuleSerial} capsule={capsule} />
            ))}
          </div>

          <div className={style.pagenation}>
            <div
              className={`${style.pagenationButton} ${
                currentPage === 1 && style.activePage
              }`}
              onClick={() => navigateToPage(currentPage - 1)}
            >
              &lt; Previous
            </div>
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index + 1}
                className={`${style.pagenationButton} ${
                  currentPage === index + 1 ? style.activePage : ""
                }`}
                onClick={() => navigateToPage(index + 1)}
              >
                {index + 1}
              </div>
            ))}
            <div
              className={`${style.pagenationButton} ${
                currentPage === totalPages && style.activePage
              }`}
              onClick={() => navigateToPage(currentPage + 1)}
            >
              Next &gt;
            </div>
          </div>
        </>
      )}
    </div>
  );
}
