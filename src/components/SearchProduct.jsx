import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import productData from "../data/productData.json";
import ProductQuickViews from "./ProductQuickViews";

export function SearchProduct({ cart, setCart }) {
  const [searchProductData, setSearchProductData] = useState([]);
  const [isProductQuickViewOpen, setIsProductQuickViewOpen] = useState(false);
  const [products, setProducts] = useState(productData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [openModal, setOpenModal] = useState(false);
  const [filterText, setFilterText] = useState("");

  const handleFilterText = (event) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    let searchResult = products.filter((prod) =>
      prod.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredProducts(searchResult);
  }, [filterText, products]);

  const handleProductQuickView = (value) => {
    setSearchProductData([value]);
    setIsProductQuickViewOpen(true);
    setOpenModal(false);
    console.log(value);
  };

  const ProductCard = () => {
    return (
      <>
        {filteredProducts.map((value, index) => {
          return (
            <div
              key={index}
              className="card w-full sm:w-64 bg-base-100 shadow-xl mx-auto mb-5"
            >
              <figure className="w-full h-full sm:h-56">
                <img
                  className="w-full h-72 sm:h-full object-cover object-center"
                  src={value.imgSrc}
                />
              </figure>
              <div className="card-body bg-custom rounded-b-2xl">
                <h1 className="card-title text-sm">{value.name}</h1>
                <p>{value.price.toFixed(2)} $</p>
                <div>
                  {value.colors.map((color, colorIndex) => (
                    <p
                      key={colorIndex}
                      className={`w-5 h-5 object-contain ${color.class} rounded-full border-blue-100 my-4 border-2 inline-block mr-2`}
                    ></p>
                  ))}
                </div>
                <div className="card-actions">
                  <div
                    className="badge badge-outline cursor-pointer hover:bg-first"
                    onClick={() => handleProductQuickView(value)}
                  >
                    view
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <button className="border-r-2 border-gray-400 cursor-pointer">
        <span
          onClick={() => setOpenModal(true)}
          className="material-symbols-outlined text-first mt-3 mr-4"
        >
          search
        </span>
      </button>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className=" bg-custom"
      >
        <Modal.Header className="bg-black">
          <div>
            <label className="bg-custom input input-bordered flex items-center gap-2">
              <input
                value={filterText}
                type="text"
                className="grow"
                placeholder="type something"
                onChange={(event) => handleFilterText(event)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </Modal.Header>
        <Modal.Body className="bg-black rounded-b-md">
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-[1fr,1fr] gap- items-center justify-center">
            <ProductCard />
          </div>
        </Modal.Body>
      </Modal>
      {searchProductData.length > 0 && (
        <ProductQuickViews
          isOpen={isProductQuickViewOpen}
          setIsOpen={setIsProductQuickViewOpen}
          productData={searchProductData[0]} // Pass the first product from the array
          setCart={setCart}
          cart={cart}
        />
      )}
    </>
  );
}
