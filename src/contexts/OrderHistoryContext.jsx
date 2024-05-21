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

        const allUserPackages = [];

        for (const userUID in data) {
          if (Object.hasOwnProperty.call(data, userUID)) {
            const userData = data[userUID];

            for (const packageID in userData) {
              if (Object.hasOwnProperty.call(userData, packageID)) {
                const { packages } = userData[packageID];

                if (packages && Array.isArray(packages)) {
                  packages.forEach((pkg) => {
                    allUserPackages.push({
                      ...pkg,
                      packageID,
                      userUID,
                    });
                  });
                }
              }
            }
          }
        }

        setUserOrderHistory(allUserPackages);
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
