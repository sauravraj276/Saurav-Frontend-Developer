import { createContext, useContext, useEffect, useState } from 'react';
import Capsule from '../model/capsule';

const CapsuleContext = createContext();

export function useCapsule() {
  return useContext(CapsuleContext);
}

export function CapsuleProvider({ children }) {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/capsules')
      .then((response) => response.json())
      .then((data) => {
        const capsuleObjects = data.map((capsuleData) => new Capsule(capsuleData));
        setCapsules(capsuleObjects);
      })
      .catch((error) => console.error('Error fetching capsule data:', error));
  }, []); 

  return (
    <CapsuleContext.Provider value={capsules}>
      {children}
    </CapsuleContext.Provider>
  );
}
