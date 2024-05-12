import React, { useState } from "react";
import ProductQuickViews from "./ProductQuickViews";

const Products = ({ finalProductData, toggleGrid, handleClearFiltering }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleToggleProductViews(product) {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {selectedProduct && (
          <ProductQuickViews
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            productData={selectedProduct}
          />
        )}
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-custom">
            Our Products
          </h2>
          <button
            className=" text-sm px-2 rounded-3xl flex items-center gap-2 text-neutral-400"
            onClick={handleClearFiltering}
          >
            Clear Filters
            <span className="material-symbols-outlined text-base text-first">
              cancel
            </span>
          </button>
        </div>
        <div
          className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-${toggleGrid} xl:gap-x-8`}
        >
          {finalProductData?.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onClick={() => handleToggleProductViews(product)}
            >
              <div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imgSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-custom font-bold">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm  text-custom font-semibold">
                    {product.price}$
                  </p>
                </div>
              </div>
              <div className="mt-3">
                {product.colors.map((color, index) => (
                  <p
                    key={index}
                    className={`${color.class} w-5 h-5 rounded-full inline-block mr-3 border border-blue-200 bg-`}
                  ></p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
