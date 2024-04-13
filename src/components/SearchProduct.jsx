import { Modal } from "flowbite-react";
import { useEffect, useState, useContext } from "react";
import ProductQuickViews from "./ProductQuickViews";
import { ProductCard } from "./SearchProductCard.jsx";
import { FirebaseData } from "../data/productData.jsx";

export function SearchProduct() {
  const { productData } = useContext(FirebaseData);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(productData);
  const [openModal, setOpenModal] = useState(false);
  const [filterText, setFilterText] = useState("");

  const handleFilterText = (event) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    if (filterText === "") {
      setProducts(productData);
    } else {
      let searchResult = productData.filter((prod) =>
        prod.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setProducts(searchResult);
    }
  }, [filterText]);

  const handleProductQuickView = (value) => {
    setSelectedProduct(value);
    setIsOpen(true);
    setOpenModal(false);
  };

  return (
    <div>
      {selectedProduct && (
        <ProductQuickViews
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productData={selectedProduct}
        />
      )}
      <button className=" cursor-pointer">
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
            <ProductCard
              handleProductQuickView={handleProductQuickView}
              products={products}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
