import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <NavbarSection cart={cart} setCart={setCart} />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={
              <Shops
                setCart={setCart}
                cart={cart}
                open={open}
                setOpen={setOpen}
              />
            }
          />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
