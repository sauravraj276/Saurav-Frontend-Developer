import { createContext, useContext, useEffect, useState } from "react";
import Capsule from "../model/capsule";

const CapsuleContext = createContext();

export function useCapsule() {
  return useContext(CapsuleContext);
}

export function CapsuleProvider({ children }) {
  const [capsules, setCapsules] = useState([]); //stores all the searched capsules
  const [pageCapsules, setPageCapsules] = useState([]); //data shown on the current page
  const [staticCapsules, setStaticCapsules] = useState([]); //stores all the data of capsules
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchCapsules = async (selectedFilter, searchInput) => {
    try {
      setLoading(true);
      const searchTerm = searchInput.toLowerCase();
      var filteredCapsules = false;
      if (selectedFilter !== "all") {
        filteredCapsules = staticCapsules.filter((capsule) => {
          switch (selectedFilter) {
            case "capsule_serial":
              return capsule.capsuleSerial.toLowerCase().includes(searchTerm);
            case "status":
              return capsule.status.toLowerCase().includes(searchTerm);
            case "type":
              return capsule.type.toLowerCase().includes(searchTerm);
            default:
              return false;
          }
        });
      } else {
        filteredCapsules = staticCapsules.filter((capsule) => {
          console.log(capsule.toString());
          return capsule.data.toLowerCase().includes(searchTerm);
        });
      }

      setCapsules(filteredCapsules);
      const totalCount = filteredCapsules.length;
      setTotalPages(Math.ceil(totalCount / 6));
      setCurrentPage(1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error geting capsule Details");
      console.error("Error fetching capsule data:", error);
    }
  };

  const fetchAllCapsules = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.spacexdata.com/v3/capsules`);

      const data = await response.json();
      const capsuleObjects = data.map(
        (capsuleData) => new Capsule(capsuleData)
      );
      const totalCount = capsuleObjects.length;
      setCapsules(capsuleObjects);
      setPageCapsules(capsuleObjects.slice(0, 6));
      setStaticCapsules(capsuleObjects);
      setTotalPages(Math.ceil(totalCount / 6));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error geting capsule Details");
      console.error("Error fetching capsule data:", error);
    }
  };
  const changePage = async (page) => {
    try {
      setLoading(true);
      setPageCapsules(capsules.slice((page - 1) * 6, page * 6));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error geting capsule Details");
      console.error("Error fetching capsule data:", error);
    }
  };

  useEffect(() => {
    fetchAllCapsules();
  }, []);

  useEffect(() => {
    changePage(currentPage);
  }, [currentPage, capsules]);

  return (
    <CapsuleContext.Provider
      value={{
        pageCapsules,
        totalPages,
        currentPage,
        setCurrentPage,
        searchCapsules,
        loading,
        error,
      }}
    >
      {children}
    </CapsuleContext.Provider>
  );
}
