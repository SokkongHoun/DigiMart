import React, { createContext, useState, useEffect } from "react";
import { cartData } from "../cartDataConfig";
import { getDatabase, ref, get } from "firebase/database";

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

    if (cart.length === 0 || cartPriceData.subTotal === 0) {
      cartPriceData.shipping = 0;
    } else if (cartPriceData.subTotal >= 100) {
      cartPriceData.shipping = 0;
    } else {
      cartPriceData.shipping = 20;
    }

    cartPriceData.tax = cartPriceData.subTotal * 0.05;
    cartPriceData.orderTotal =
      cartPriceData.subTotal + cartPriceData.tax + cartPriceData.shipping;

    setCartPrices(cartPriceData);
  }, [cart]);

  const realTimeDB = getDatabase(cartData);
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
