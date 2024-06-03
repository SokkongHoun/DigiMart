import NavbarSection from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shops from "./pages/Shop.jsx";
import React from "react";
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
import { CartProvider } from "./contexts/CartProvider.jsx";
import { UserOrderHistory } from "./contexts/OrderHistoryContext.jsx";
import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://93ac141d273b53306956414c466506b8@o4507346082332672.ingest.us.sentry.io/4507350914433024",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.replayIntegration(),
//     Sentry.feedbackIntegration({
//       colorScheme: "dark",
//     }),
//   ],
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

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
                      <UserOrderHistory>
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
                      </UserOrderHistory>
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
