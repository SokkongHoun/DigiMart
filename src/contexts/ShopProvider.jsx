import React, { useContext, useState, useEffect, createContext } from "react";
import { FirebaseData } from "./productData";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const { productData, loading } = useContext(FirebaseData);
  const [filteredSubCategory, setFilteredSubCategory] = useState([]);
  /* for underline the selected category */
  const [underline, setUnderline] = useState(null);

  useEffect(() => {
    if (!loading) {
      setFilteredSubCategory(productData);
    }
  }, [productData, loading]);

  const handleFilterSubCategory = (subCategoryName) => {
    setUnderline(subCategoryName);
    const filteredProducts = productData.filter(
      (product) => product.category === subCategoryName
    );
    setFilteredSubCategory(filteredProducts);
  };

  return (
    <ShopContext.Provider
      value={{
        underline,
        filteredSubCategory,
        handleFilterSubCategory,
        setFilteredSubCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
