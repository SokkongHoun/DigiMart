import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Company from "./pages/Company.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
