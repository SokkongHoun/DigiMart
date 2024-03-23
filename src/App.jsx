import NavbarSection from "./components/Navbar";
import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
