import React, { useEffect, useState } from "react";
import { UserDataApp } from "../userDataConfig";
import { getDatabase, ref, get } from "firebase/database";
import { UserAuth } from "../auth/AuthContext";

const OrderHistory = () => {
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
        {userOrderHistory.map((val) => {
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
                  {val.packages.map((itemInfo) => {
                    return (
                      <>
                        <div className="text-center">
                          <p>Date placed</p>
                          <p>{itemInfo.datePlaced}</p>
                        </div>
                        <div className="text-right">
                          <p>Total amount</p>
                          <p>${itemInfo.totalPackagePrice}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {val.packages.map((itemInfo) => {
                return (
                  <>
                    <div className="flex flex-col" key={itemInfo.productId}>
                      {itemInfo.products.map((itemDetails, index) => {
                        return (
                          <div
                            key={index}
                            className="flex gap-5 border-b border-first mb-5 pb-5"
                          >
                            <img
                              src={itemDetails.imgSrc}
                              className="w-48 rounded-lg h-48"
                            />
                            <div>
                              <div className="flex justify-between">
                                <h6 className="text-base">
                                  {itemDetails.name}
                                </h6>
                                <h6 className="text-base">
                                  ${itemDetails.totalPrices}/pc
                                </h6>
                              </div>
                              <p className="text-base text-first mt-2">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Est dolorem animi quos
                                accusamus iste aspernatur hic reprehenderit
                                soluta maxime ipsam dolor delectus, vel
                                dignissimos sint! Voluptates illo quo nulla
                                nesciunt?
                              </p>
                              <p className="mt-2">
                                Total: $
                                {itemDetails.totalPrices *
                                  itemDetails.totalQuantities}
                              </p>
                              <div className="flex justify-between items-end mt-9">
                                <div>
                                  <p className="flex gap-2">
                                    <span className="material-symbols-outlined text-green-500 inline-block">
                                      local_shipping
                                    </span>
                                    Delivered on {itemInfo.delivery}
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
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default OrderHistory;
{
  /* 
  
*/
}
