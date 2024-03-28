import React from "react";

const Shops = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-screen-2xl">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90">
            <img src="" alt="" />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-lg text-custom font-semibold">
                <a>
                  <span aria-hidden="true" className="absolute inset-0" />
                  asdasd
                </a>
              </h3>
              <p className="mt-1 font-semibold text-sm text-custom">asd</p>
            </div>
            <p className="text-lg font-semibold text-custom">asd</p>
          </div>
        </div>
      </div>
      <button className="bg-white">Click</button>
    </main>
  );
};

export default Shops;
