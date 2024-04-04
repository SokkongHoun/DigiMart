import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";
import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavbarSection />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shops />} />
            <Route path="/NotFoundPage" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
