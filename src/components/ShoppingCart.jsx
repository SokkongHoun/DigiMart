import { Modal } from "flowbite-react";
import { CartContext } from "../App";
import React, { useContext, useState, useEffect } from "react";
import { UserAuth } from "../auth/AuthContext";
import { UserDataApp } from "../userDataConfig";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-toastify";
import { useUserCart } from "../contexts/UserCartData";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebaseConfig";

function ShoppingCart({ openModal, setOpenModal }) {
  const { cart, setCart } = useContext(CartContext);
  const { user } = UserAuth();
  const { userCartData, updateCartData } = useUserCart();

  let subtotal = 0;
  cart.forEach((item) => {
    let itemCost = item.price * item.qty;
    subtotal += itemCost;
  });
  let shipping = 5;
  let taxEstaimted = subtotal * 0.05;
  const orderTotal = taxEstaimted + subtotal + shipping;
  let combinedCart = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].price += item.price;
      acc[item.id].qty += item.qty;
    } else {
      acc[item.id] = { ...item, price: item.price, qty: item.qty };
    }
    return acc;
  }, {});
  let formattedTotalCost = parseFloat(orderTotal.toFixed(2));

  let combinedItems = Object.values(combinedCart).map((item) => ({
    id: item.id,
    imgSrc: item.imgSrc,
    name: item.name,
    totalPrices: item.price,
    totalQuantities: item.qty,
  }));

  useEffect(() => {
    let orderNumber = crypto.randomUUID();
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleString("default", {
      month: "short",
      year: "numeric",
      day: "2-digit",
    });
    let deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);
    let formatDeliveryDate = deliveryDate.toLocaleString("default", {
      month: "short",
      year: "numeric",
      day: "2-digit",
    });

    updateCartData({
      packages: [
        {
          orderNumber: orderNumber,
          totalPackagePrice: formattedTotalCost,
          delivery: formatDeliveryDate,
          datePlaced: formattedDate,
          products: combinedItems,
        },
      ],
    });
  }, [cart]);

  const productInCartCard = () => {
    const handleSelectQty = (event, index) => {
      const newCart = [...cart];
      newCart[index].qty = Number(event.target.value);
      setCart(newCart);
    };
    const handleRemoveQty = (index) => {
      const newCart = [...cart];
      if (newCart[index].qty > 1) {
        newCart[index].qty--;
      } else {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    };

    return (
      <>
        {cart.length === 0 ? (
          <p className="text-black">Ooops! No product in cart...</p>
        ) : (
          cart.map((val, index) => {
            return (
              <div key={index} className="flex justify-between">
                <div className="flex gap-5">
                  <img
                    src={val.imgSrc}
                    className="h-24  w-h-24  sm:h-40 sm:w-40 object-cover object-center"
                  />
                  <div className="flex flex-col gap-2 sm:gap-5 justify-between">
                    <div>
                      <p className="text-black text-xs sm:text-sm">
                        {val.name}
                      </p>
                      <p
                        className={`w-5 h-5 object-contain ${val.color.class} rounded-full mt-3 border-2 border-blue-200 `}
                      ></p>
                    </div>
                    <div className="flex gap-5 items-center">
                      <div className="max-w-sm">
                        <select
                          value={cart[index].qty}
                          className="select select-bordered select-xs w-full max-w-xs"
                          onChange={(event) => handleSelectQty(event, index)}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                      </div>
                      <p
                        onClick={() => handleRemoveQty(index)}
                        className="text-black text-xs sm:text-sm hover:underline cursor-pointer"
                      >
                        remove
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xs sm:text-sm mb-2">
                        Qty: {val.qty}
                      </p>
                      <p className="text-black text-xs sm:text-sm">
                        Ships in 3-4 weeks
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-black">
                    {val.price}$/pc
                  </p>
                </div>
              </div>
            );
          })
        )}
      </>
    );
  };

  const Button = ({ child }) => {
    return (
      <button
        onClick={() => setOpenModal(false)}
        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      >
        {child}
      </button>
    );
  };

  const OrderSummary = () => {
    return (
      <div className="w-full text-black bg-gray-100 p-5">
        <h1 className="text-lg mb-4 font-bold">Order summary</h1>
        <div className="flex justify-between mb-3">
          <p className="text-sm sm:text-base">Subtotal</p>
          <p className="text-sm sm:text-base">${subtotal.toFixed(2)}</p>
        </div>
        <hr className="border border-third" />
        <div className="flex justify-between mt-4 mb-3">
          <p className="text-sm sm:text-base">Shipping estimated</p>
          <p className="text-sm sm:text-base">${shipping.toFixed(2)}</p>
        </div>
        <hr className="border border-third" />
        <div className="flex justify-between mt-4 mb-3">
          <p className="text-sm sm:text-base">Tax estimated</p>
          <p className="text-sm sm:text-base">${taxEstaimted.toFixed(2)}</p>
        </div>
        <hr className="border border-third" />
        <div className="flex justify-between mt-4">
          <h3 className="text-base font-bold">Order total</h3>
          <h3 className="text-base font-bold">${formattedTotalCost}</h3>
        </div>
      </div>
    );
  };

  /*
  let stripeData = userCartData.packages[0].products.map((product) => {
    let stripePrice = product.totalPrices * 100;
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          image_url: product.imgSrc,
        },
        unit_amount: stripePrice,
      },
      quantity: product.totalQuantities,
    };
  });
  */
  /*
  const handlePayment = () => {
    const db = getDatabase(UserDataApp);
    const paymentId = Math.random().toString(36).substring(2, 15);
    const paymentRef = ref(db, `${user.uid}/${paymentId}`);
    set(paymentRef, { ...userCartData, paymentId: paymentId })
      .then(() => {
        setCart([]);
        setOpenModal(false);
      })
      .catch((error) => {
        console.log("Error submitting payment: ", error);
      });
  };
  */

  const handleLoadStripeCheckout = async () => {
    console.log("hello");
  };

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-white">
          <span className="text-black font-semibold text-2xl">
            Shopping Carts
          </span>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div className="space-y-6">{productInCartCard()}</div>
        </Modal.Body>
        <Modal.Footer className="bg-white flex flex-col">
          <OrderSummary />
          {cart.length === 0 ? (
            <Button child="Continue shopping" />
          ) : (
            <button
              className="bg-black w-full py-3 rounded-md mt-5 hover:bg-slate-900"
              onClick={handleLoadStripeCheckout}
            >
              Continue to payment
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ShoppingCart;
