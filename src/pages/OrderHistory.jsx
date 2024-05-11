import React, { useEffect, useState } from "react";
import { UserDataApp } from "../userDataConfig";
import { getDatabase, ref, get } from "firebase/database";
import { UserAuth } from "../auth/AuthContext";

const OrderHistory = () => {
  let [userData, setUserData] = useState([
    {
      packages: [
        {
          orderNumber: "f8af646f-f668-418d-b806-565ce561fbc3",
          datePlaced: "Jul 6, 2021",
          totalPackagePrice: 202,
          products: [
            {
              productInfo: [
                {
                  productId: 1,
                  name: "A High-End Mouse Pad",
                  price: 45.99,
                  colors: [
                    {
                      class: "bg-blue-600",
                      name: "Blue",
                      selectedClass: "ring-gray-900",
                      quantity: 3,
                    },
                    {
                      class: "bg-green-700",
                      name: "Green",
                      selectedClass: "ring-gray-900",
                      quantity: 5,
                    },
                  ],
                  totalQuantity: 8,
                  imgSrc:
                    "https://cdn.shopify.com/s/files/1/0845/0257/7474/files/06-pad.jpg?v=1699505807&width=940",
                },
              ],
              totalAmount: 280,
              delivery: "Jul 12, 2024",
            },
            {
              productInfo: [
                {
                  productId: 3,
                  name: "Cardholder Snap Case",
                  price: 50,
                  colors: [
                    {
                      class: "bg-blue-600",
                      name: "Blue",
                      selectedClass: "ring-gray-900",
                      quantity: 3,
                    },
                    {
                      class: "bg-green-700",
                      name: "Green",
                      selectedClass: "ring-gray-900",
                      quantity: 5,
                    },
                  ],
                  totalQuantity: 8,
                  imgSrc:
                    "https://cdn.shopify.com/s/files/1/0845/0257/7474/files/03-card-color-02.jpg?v=1699361273&width=940",
                },
              ],
              totalAmount: 280,
              delivery: "Jul 12, 2024",
            },
          ],
        },
        {
          orderNumber: "f8af646f-f668-418d-b806-565ce561fbc3",
          datePlaced: "Jul 12, 2021",
          totalPackagePrice: 12332,
          products: [
            {
              productInfo: [
                {
                  productId: 5,
                  name: "Casual Business Tote",
                  price: 65.99,
                  colors: [
                    {
                      class: "bg-blue-600",
                      name: "Blue",
                      selectedClass: "ring-gray-900",
                      quantity: 3,
                    },
                    {
                      class: "bg-green-700",
                      name: "Green",
                      selectedClass: "ring-gray-900",
                      quantity: 5,
                    },
                  ],
                  totalQuantity: 8,
                  imgSrc:
                    "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/02-bags-color-01.jpg?v=1699507659&width=535",
                },
              ],
              totalAmount: 2310,
              delivery: "Jul 12, 2024",
            },
          ],
        },
      ],
    },
  ]);
  const [userOrderHistory, setUserOrderHistory] = useState([]);

  const { user } = UserAuth();
  const db = getDatabase(UserDataApp);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = ref(db, `${user.uid}/`);
        const snapshot = await get(userRef);
        const data = snapshot.val();
        const userOrderHistory = [];
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const { packages: userPackages } = data[key];
            userOrderHistory.push({
              packages: userPackages,
              id: crypto.randomUUID(),
            });
          }
        }
        setUserOrderHistory(userOrderHistory);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  console.log(userOrderHistory);

  const keyingUserPackages = userData[0].packages.map((val) => {
    return { ...val, id: crypto.randomUUID() };
  });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-14">
      <div className="mt-16">
        <h1 className="text-3xl font-semibold">Order history</h1>
        <p className="justify-between text-first mt-2">
          Check the status of recent orders, manage returns, and discover
          similar products.
          <span className="badge ml-3 h-7 w-20 bg-black border-none rounded-md">
            Preview
          </span>
        </p>
        {keyingUserPackages.map((val) => {
          return (
            <div
              className="border px-5 py-5 rounded-lg border-first mt-20"
              key={val.id}
            >
              <div className="w-full border-b border-first mb-10">
                <div className="grid grid-cols-3 mb-5 gap-10">
                  <div>
                    <p>Order number</p>
                    <p>{val.id}</p>
                  </div>
                  <div className="text-center">
                    <p>Date placed</p>
                    <p>{val.datePlaced}</p>
                  </div>
                  <div className="text-right">
                    <p>Total amount</p>
                    <p>${val.totalPackagePrice}</p>
                  </div>
                </div>
              </div>
              {val.products.map((pro) => {
                return pro.productInfo.map((item) => {
                  return (
                    <div
                      className="flex gap-5 border-b border-first mb-5 pb-5"
                      key={item.productId}
                    >
                      <img src={item.imgSrc} className="w-48 rounded-lg h-48" />
                      <div>
                        <div className="flex justify-between">
                          <h6 className="text-base">{item.name}</h6>
                          <h6 className="text-base">${item.price}/pc</h6>
                        </div>
                        <p className="text-base text-first mt-2">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Est dolorem animi quos accusamus iste aspernatur
                          hic reprehenderit soluta maxime ipsam dolor delectus,
                          vel dignissimos sint! Voluptates illo quo nulla
                          nesciunt?
                        </p>
                        <p className="mt-2">Total: ${pro.totalAmount}</p>
                        <div className="flex justify-between items-end mt-9">
                          <div>
                            <p className="flex gap-2">
                              <span className="material-symbols-outlined text-green-500 inline-block">
                                local_shipping
                              </span>
                              Delivered on {pro.delivery}
                            </p>
                          </div>
                          <div className="flex gap-5">
                            <button className="text-blue-400 hover:text-blue-500">
                              View product
                            </button>
                            <span
                              className="h-6 w-px bg-gray-600 block lg:mr-0"
                              aria-hidden="true"
                            />
                            <button className="text-blue-400 hover:text-blue-500">
                              Buy again
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default OrderHistory;
