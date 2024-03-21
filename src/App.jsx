import { NavbarSection } from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSection />
        <div className="container mx-auto px-4 mt-32">
          <Routes>
            <Route index element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
