import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";
import React, { useState, createContext, useContext, useEffect } from "react";
import LayoutFooter from "./components/routes/LayoutFooter.jsx";
import FirebaseDataProvider from "./contexts/productData.jsx";
import { FirebaseData } from "./contexts/productData.jsx";
import SignInForm from "./pages/SignInForm.jsx";
import SignUpForm from "./pages/SignUpForm.jsx";
import ResetPasswordForm from "./pages/ResetPasswordForm.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminSetUp from "./pages/admin/AdminSetUp.jsx";
import { UserAuth } from "./auth/AuthContext.jsx";
import AdminNav from "./components/admin/AdminNav.jsx";
import ProductDashboard from "./pages/admin/ProductDashboard.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";

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
  const { adminStatus } = UserAuth();
  return (
    <>
      <FirebaseDataProvider>
        <CartProvider>
          <ShopProvider>
            <BrowserRouter>
              {adminStatus ? (
                <>
                  <AdminNav />
                  <Routes>
                    <Route
                      index
                      element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/GrantingAdminAccessibility"
                      element={
                        <ProtectedRoute>
                          <AdminSetUp />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/productdashboard"
                      element={
                        <ProtectedRoute>
                          <ProductDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </>
              ) : (
                <>
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
                      path="/signIn"
                      element={
                        <LayoutFooter includeFooter={true}>
                          <SignInForm />
                        </LayoutFooter>
                      }
                    />
                    <Route
                      path="/signUp"
                      element={
                        <LayoutFooter includeFooter={true}>
                          <SignUpForm />
                        </LayoutFooter>
                      }
                    />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route
                      path="/resetpassword"
                      element={
                        <LayoutFooter includeFooter={true}>
                          <ResetPasswordForm />
                        </LayoutFooter>
                      }
                    />
                  </Routes>
                </>
              )}
              <ToastContainer />
            </BrowserRouter>
          </ShopProvider>
        </CartProvider>
      </FirebaseDataProvider>
    </>
  );
}

export default App;
