import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";
import React, { useState, createContext, useEffect } from "react";
import LayoutFooter from "./contexts/LayoutFooter.jsx";
import FirebaseDataProvider from "./contexts/productData.jsx";
import SignInForm from "./pages/SignInForm.jsx";
import SignUpForm from "./pages/SignUpForm.jsx";
import ResetPasswordForm from "./pages/ResetPasswordForm.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuth } from "./auth/AuthContext.jsx";
import AdminNav from "./components/admin/AdminNav.jsx";
import ProductDashboard from "./pages/admin/ProductDashboard.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";
import AdminAccessContext from "./contexts/AdminAccessContext.jsx";
import OrderHistory from "./pages/OrderHistory.jsx";
import { UserCartRoute } from "./contexts/ProtectedRoute.jsx";
import { UserCartProvider } from "./contexts/UserCartData.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import CancelPayment from "./pages/CancelPayment.jsx";
import { ShopProvider } from "./contexts/ShopProvider.jsx";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

function App() {
  const { adminStatus } = UserAuth();

  return (
    <>
      <FirebaseDataProvider>
        <UserCartProvider>
          <CartProvider>
            <ShopProvider>
              <BrowserRouter>
                {adminStatus ? (
                  <>
                    <AdminAccessContext>
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
                          path="/productdashboard"
                          element={
                            <ProtectedRoute>
                              <ProductDashboard />
                            </ProtectedRoute>
                          }
                        />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </AdminAccessContext>
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
                        path="/orderhistory"
                        element={
                          <UserCartRoute>
                            <LayoutFooter includeFooter={true}>
                              <OrderHistory />
                            </LayoutFooter>
                          </UserCartRoute>
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
                        path="/paymentsuccessful"
                        element={
                          <LayoutFooter includeFooter={true}>
                            <PaymentSuccess />
                          </LayoutFooter>
                        }
                      />
                      <Route
                        path="/cancelpayment"
                        element={
                          <LayoutFooter includeFooter={true}>
                            <CancelPayment />
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
                      <Route
                        path="*"
                        element={
                          <LayoutFooter includeFooter={true}>
                            <NotFoundPage />
                          </LayoutFooter>
                        }
                      />
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
        </UserCartProvider>
      </FirebaseDataProvider>
    </>
  );
}

export default App;
