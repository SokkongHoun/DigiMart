import React from "react";

const OrderHistory = () => {
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
        <div className="border px-5 py-5 rounded-lg border-first mt-20">
          <div className="w-full border-b border-first mb-10">
            <div className="flex justify-between w-96 mb-5">
              <div>
                <p>Order number</p>
                <p>WU88191111</p>
              </div>
              <div>
                <p>Date placed</p>
                <p>Jul 6, 2021</p>
              </div>
              <div>
                <p>Total amount</p>
                <p>$160.00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 border-b border-first mb-5 pb-5">
            <img
              src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"
              className="w-h-48 rounded-lg h-48"
            />
            <div>
              <div className="flex justify-between">
                <h6 className="text-base">Micro Backpack</h6>
                <h6 className="text-base">$70.00/pc</h6>
              </div>
              <p className="text-base text-first mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                dolorem animi quos accusamus iste aspernatur hic reprehenderit
                soluta maxime ipsam dolor delectus, vel dignissimos sint!
                Voluptates illo quo nulla nesciunt?
              </p>
              <p className="mt-2">Total: $140.00</p>
              <div className="flex justify-between items-end mt-9">
                <div>
                  <p className="flex gap-2">
                    <span className="material-symbols-outlined text-green-500 inline-block">
                      check_circle
                    </span>
                    Delivered on July 12, 2021
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
          <div className="flex gap-5 border-b border-first mb-5 pb-5">
            <img
              src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"
              className="w-h-48 rounded-lg h-48"
            />
            <div>
              <div className="flex justify-between">
                <h6 className="text-base">Micro Backpack</h6>
                <h6 className="text-base">$70.00/pc</h6>
              </div>
              <p className="text-base text-first mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                dolorem animi quos accusamus iste aspernatur hic reprehenderit
                soluta maxime ipsam dolor delectus, vel dignissimos sint!
                Voluptates illo quo nulla nesciunt?
              </p>
              <p className="mt-2">Total: $140.00</p>
              <div className="flex justify-between items-end mt-8">
                <div>
                  <p className="flex gap-2">
                    <span className="material-symbols-outlined text-green-500 inline-block">
                      check_circle
                    </span>
                    Delivered on July 12, 2021
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
        </div>
      </div>
    </main>
  );
};

export default OrderHistory;
