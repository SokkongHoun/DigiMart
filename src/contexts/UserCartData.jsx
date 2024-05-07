import React, { createContext, useState, useContext } from "react";
const UserCartContext = createContext();

export const UserCartProvider = ({ children }) => {
  const [userCartData, setUserCartData] = useState({});

  const updateCartData = (newData) => {
    setUserCartData(newData);
  };

  const value = { userCartData, updateCartData };

  return (
    <UserCartContext.Provider value={value}>
      {children}
    </UserCartContext.Provider>
  );
};

export const useUserCart = () => useContext(UserCartContext);
