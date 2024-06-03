import React, { createContext, useState, useEffect } from "react";
import { cartData } from "../cartDataConfig";
import { getDatabase, ref, set, get } from "firebase/database";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartPrices, setCartPrices] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    let cartPriceData = {
      subTotal: 0,
      shipping: 0,
      tax: 0,
      orderTotal: 0,
      items: [],
    };

    cart.forEach((item) => {
      let itemCost = item.price * item.qty;
      cartPriceData.subTotal += itemCost;
      cartPriceData.items.push(item);
    });

    cartPriceData.shipping = cartPriceData.subTotal > 100 ? 0 : 20;
    cartPriceData.tax = cartPriceData.subTotal * 0.05;
    cartPriceData.orderTotal =
      cartPriceData.shipping + cartPriceData.tax + cartPriceData.subTotal;

    setCartPrices(cartPriceData);
  }, [cart]);

  const realTimeDB = getDatabase(cartData);
  useEffect(() => {
    if (cartPrices) {
      const cartRef = ref(realTimeDB, "cartPrices");
      set(cartRef, cartPrices)
        .then(() => {
          console.log("Cart prices saved to Firebase");
        })
        .catch((error) => {
          console.error("Error saving cart prices:", error);
        });
    }
  }, [cartPrices]);

  useEffect(() => {
    const cartPricesRef = ref(realTimeDB, "cartPrices");

    get(cartPricesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCartPrices(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching cart prices:", error);
      });
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, cartPrices }}>
      {children}
    </CartContext.Provider>
  );
};
