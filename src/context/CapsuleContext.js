import { createContext, useContext, useEffect, useState } from "react";
import Capsule from "../model/capsule";

const CapsuleContext = createContext();

export function useCapsule() {
  return useContext(CapsuleContext);
}

export function CapsuleProvider({ children }) {
  const [capsules, setCapsules] = useState([]);
  const [staticCapsules, setStaticCapsules] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading]=useState(false);
  const [error,setError]=useState('');

  const searchCapsules = async (selectedFilter, searchInput) => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/capsules?${selectedFilter}=${searchInput}`
      );
      console.log(response);
      const data = await response.json();
      const totalCount = parseInt(response.headers.get("spacex-api-count")) - 3;
      const capsuleObjects = data.map(
        (capsuleData) => new Capsule(capsuleData)
      );
      setCapsules(capsuleObjects);
      console.log(capsuleObjects);
      setTotalPages(Math.ceil(totalCount / 6));
    } catch (error) {
      console.error("Error fetching capsule data:", error);
    }
  };

  const fetchCapsules = async (page) => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/capsules?limit=${page == 1 ? 3 : 6}
        &offset=${(page - 1) * 6}`
      );

      const data = await response.json();
      const totalCount = parseInt(response.headers.get("spacex-api-count")) - 3;
      const capsuleObjects = data.map(
        (capsuleData) => new Capsule(capsuleData)
      );
      setCapsules(capsuleObjects);
      console.log(capsuleObjects);
      setStaticCapsules(capsuleObjects);
      setTotalPages(Math.ceil(totalCount / 6));
    } catch (error) {
      console.error("Error fetching capsule data:", error);
    }
  };
  const fetchAllCapsules = async () => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/capsules`
      );

      const data = await response.json();
      const totalCount = parseInt(response.headers.get("spacex-api-count")) - 3;
      const capsuleObjects = data.map(
        (capsuleData) => new Capsule(capsuleData)
      );
      setCapsules(capsuleObjects);
      console.log(capsuleObjects);
      setStaticCapsules(capsuleObjects);
      setTotalPages(Math.ceil(totalCount / 6));
    } catch (error) {
      console.error("Error fetching capsule data:", error);
    }
  };

  useEffect(() => {
    fetchAllCapsules();
    fetchCapsules(currentPage);
  }, [currentPage]);

  return (
    <CapsuleContext.Provider
      value={{
        capsules,
        totalPages,
        currentPage,
        setCurrentPage,
        searchCapsules,
      }}
    >
      {children}
    </CapsuleContext.Provider>
  );
}
