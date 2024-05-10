import React, { createContext, useState, useContext } from "react";
const UserCartContext = createContext();

export const UserCartProvider = ({ children }) => {
  const [userCartData, setUserCartData] = useState({});

  return (
    <UserCartContext.Provider value={{ userCartData, setUserCartData }}>
      {children}
    </UserCartContext.Provider>
  );
};

export const useUserCart = () => useContext(UserCartContext);
