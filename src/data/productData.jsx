import React, { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { createContext } from "react";

export const FirebaseData = createContext();

const FirebaseDataProvider = ({ children }) => {
  let [productData, setProductsData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "products/data");

    (async () => {
      try {
        const snapshot = await get(dbRef);
        const data = snapshot.val();
        const productsWithIds = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log("Data retrieved successfully");
        setProductsData(productsWithIds);
        setLoading(false);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <FirebaseData.Provider value={{ productData, loading }}>
      {children}
    </FirebaseData.Provider>
  );
};

export default FirebaseDataProvider;
