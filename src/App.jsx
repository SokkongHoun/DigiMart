import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";
import React, { useState, createContext } from "react";
import productData from "./data/productData.json";
import LayoutFooter from "./components/routes/LayoutFooter.jsx";

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
  const [filteredSubCategory, setFilteredSubCategory] = useState(productData);
  /* for underline the selected category */
  const [underline, setUnderline] = useState(null);

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
              <Route path="/NotFoundPage" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </ShopProvider>
      </CartProvider>
    </>
  );
}

export default App;
