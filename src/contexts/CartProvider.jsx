import React, { createContext, useState, useEffect } from "react";
import { getDatabase, ref, get, set } from "firebase/database";
import { UserAuth } from "../auth/AuthContext";
import { cartData } from "../cartDataConfig";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  localStorage.setItem("cart", JSON.stringify(cart));

  const { user } = UserAuth();
  const realTimeDB = getDatabase(cartData);

  const [cartPrices, setCartPrices] = useState({
    subTotal: 0,
    shipping: 0,
    tax: 0,
    orderTotal: 0,
  });

  useEffect(() => {
    const calculateCartPrices = () => {
      let subTotal = 0;
      let productInfo = [];
      cart.forEach((item) => {
        subTotal += item.price * item.qty;
        productInfo.push(item);
      });

      let shipping = subTotal >= 100 || subTotal === 0 ? 0 : 20;
      let tax = subTotal * 0.05;
      let orderTotal = subTotal + shipping + tax;

      return {
        subTotal: subTotal,
        shipping: shipping,
        tax: tax,
        orderTotal: orderTotal,
        items: productInfo,
      };
    };

    const updateFirebaseCartPrices = (prices) => {
      if (user) {
        const cartPricesRef = ref(realTimeDB, `cartPrices/${user.uid}`);
        set(cartPricesRef, prices)
          .then(() => {
            get(cartPricesRef)
              .then((snapshot) => {
                if (snapshot.exists()) {
                  const fetchedPrices = snapshot.val();
                  setCartPrices(fetchedPrices);
                } else {
                  console.log("No data available");
                }
              })
              .catch((error) => {
                console.error("Error fetching cart prices:", error);
              });
          })
          .catch((error) => {
            console.error("Error uploading cart prices:", error);
          });
      }
    };

    const initialPrices = calculateCartPrices();
    setCartPrices(initialPrices);
    updateFirebaseCartPrices(initialPrices);
  }, [cart, user, realTimeDB]);

  useEffect(() => {
    if (!user) {
      setCart([]);
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ cart, setCart, cartPrices }}>
      {children}
    </CartContext.Provider>
  );
};
