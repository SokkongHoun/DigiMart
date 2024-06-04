import React, { useEffect, useState, createContext } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { UserDataApp } from "../userDataConfig";
import { UserAuth } from "../auth/AuthContext";

export const OrderHistoryContext = createContext();

export const UserOrderHistory = ({ children }) => {
  const [userOrderHistory, setUserOrderHistory] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const db = getDatabase(UserDataApp);
    const userRef = ref(db, "/");

    const fetchUserData = async () => {
      try {
        const snapshot = await get(userRef);
        const data = snapshot.val();
        const allUserPackages = [];

        // Process data
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

    return () => {
      fetchUserData();
    };
  }, [user.uid]);

  return (
    <OrderHistoryContext.Provider value={{ userOrderHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};
