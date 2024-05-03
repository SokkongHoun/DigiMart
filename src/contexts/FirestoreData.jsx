import React, { useState, useEffect, createContext } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebaseConfig";

export const UsersDataContext = createContext();

const FirestoreData = ({ children }) => {
  let [userData, setUserData] = useState({
    uid: "",
    products: [
      {
        id: "",
        quantity: "",
        color: [],
        totalPrice: 0,
      },
    ],
    period: "",
    totalAmount: 0,
  });
  const db = getFirestore(app);

  useEffect(() => {
    const colRef = collection(db, "users");
    getDocs(colRef)
      .then((snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [db]);

  return (
    <UsersDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UsersDataContext.Provider>
  );
};

export default FirestoreData;
