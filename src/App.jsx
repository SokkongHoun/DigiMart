import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";
import React, { useState, createContext, useContext, useEffect } from "react";
import LayoutFooter from "./components/routes/LayoutFooter.jsx";
import FirebaseDataProvider from "./data/productData.jsx";
import { FirebaseData } from "./data/productData.jsx";

export const CartContext = createContext();
export const ShopContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

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

function App() {
  return (
    <>
      <FirebaseDataProvider>
        <CartProvider>
          <ShopProvider>
            <BrowserRouter>
              <NavbarSection />
              <Routes>
                <Route
                  index
                  element={
                    <LayoutFooter includeFooter={true}>
                      <Homepage />
                    </LayoutFooter>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <LayoutFooter includeFooter={true}>
                      <About />
                    </LayoutFooter>
                  }
                />
                <Route
                  path="/shop"
                  element={
                    <LayoutFooter includeFooter={true}>
                      <Shops />
                    </LayoutFooter>
                  }
                />
                <Route
                  path="/FirebaseData"
                  element={<FirebaseDataProvider />}
                />

                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </ShopProvider>
        </CartProvider>
      </FirebaseDataProvider>
    </>
  );
}

export default App;
