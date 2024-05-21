import React, { useEffect, useState, createContext } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { UserDataApp } from "../userDataConfig";

export const OrderHistoryContext = createContext();

export const UserOrderHistory = ({ children }) => {
  const [userOrderHistory, setUserOrderHistory] = useState([]);

  const db = getDatabase(UserDataApp);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = ref(db, "/");
        const snapshot = await get(userRef);
        const data = snapshot.val();

        setUserOrderHistory(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [db]);
  return (
    <OrderHistoryContext.Provider value={{ userOrderHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};
