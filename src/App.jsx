import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shops />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
