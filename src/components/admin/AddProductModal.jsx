import React, { useContext, useEffect, useState } from "react";
import { FirebaseData } from "../../contexts/productData";
import { getDatabase, set, push, ref } from "firebase/database";
import { toast } from "react-toastify";
import app from "../../firebaseConfig";

const color = [
  {
    class: "bg-black",
    name: "Black",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-gray-100",
    name: "White",
    selectedClass: "ring-gray-400",
  },
  {
    class: "bg-gray-400",
    name: "Gray",
    selectedClass: "ring-gray-400",
  },
  {
    class: "bg-blue-600",
    name: "Blue",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-red-700",
    name: "Red",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-yellow-400",
    name: "Yellow",
    selectedClass: "ring-gray-400",
  },
  {
    class: "bg-green-700",
    name: "Green",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-pink-600",
    name: "Pink",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-yellow-600",
    name: "Orange",
    selectedClass: "ring-gray-900",
  },
];

const AddProductModal = () => {
  const { productData } = useContext(FirebaseData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colors, setColors] = useState("");

  /* Add product states */
  const [formData, setFormData] = useState({
    category: "",
    imgSrc: "",
    name: "",
    price: 0,
    rating: 0,
    reviewCount: 0,
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    const numberFields = ["price", "rating", "reviewCount"];
    const parsedValue = numberFields.includes(name) ? parseFloat(value) : value;
    setFormData((prevData) => ({ ...prevData, [name]: parsedValue }));
  };

  const handleColorMatcher = (e) => {
    const selectedColor = e.target.value;
    const allColors = productData.flatMap((product) => product.colors);
    const chosenColors = allColors.find(
      (color) => color.name === selectedColor
    );

    setColors(chosenColors);
  };

  const getFormDataWithColors = () => {
    return {
      ...formData,
      colors: [colors],
    };
  };

  const handleCreateProductToDB = () => {
    const updatedFormData = getFormDataWithColors();

    const db = getDatabase(app);
    const newProductRef = push(ref(db, "products/data"));
    set(newProductRef, updatedFormData)
      .then(() => {
        toast.success("Product created successfully");
      })
      .catch((error) => {
        toast.error("Unable to create product");
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="btn bg-blue-600 text-custom hover:bg-blue-800 hover:text-white"
        onClick={openModal}
      >
        + Add Product
      </button>
      <dialog
        id="addProductModal"
        className="modal bg-custom bg-opacity-60"
        open={isModalOpen}
      >
        <div className="modal-box bg-secondary max-w-screen-sm">
          <div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
          <h3 className="font-bold text-lg">Add Product</h3>
          <hr className="mt-5 border-neutral-400" />
          <div className="grid grid-cols-2 gap-5">
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Product Name</span>
              </div>
              <input
                onChange={handleFormData}
                type="text"
                placeholder="Product Name"
                name="name"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                onChange={handleFormData}
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <input
                type="number"
                onChange={handleFormData}
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Reviews</span>
              </div>
              <input
                type="number"
                onChange={handleFormData}
                name="reviewCount"
                placeholder="Reviews"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                onChange={handleFormData}
                placeholder="Image url"
                name="imgSrc"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <div className="grid items-center grid-cols-2 gap-2 mt-5">
              <div>
                <div className="label">
                  <span className="label-text">category</span>
                </div>
                <select
                  className="select w-full"
                  onChange={handleFormData}
                  name="category"
                >
                  <option value="Mouse Pads">Mouse Pads</option>
                  <option value="Stands">Stands</option>
                  <option value="Cases">Cases</option>
                  <option value="Phone Card Holders">Phone Card Holders</option>
                  <option value="Watch Straps">Watch Straps</option>
                  <option value="Laptop bags">Laptop bags</option>
                </select>
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Color</span>
                </div>
                <select className="select w-full" onChange={handleColorMatcher}>
                  <option disabled selected>
                    color
                  </option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Gray">Gray</option>
                  <option value="Blue">Blue</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Orange">Orange</option>
                  <option value="Pink">Pink</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleCreateProductToDB}
            className="btn bg-blue-600 text-custom hover:bg-blue-800 hover:text-white mt-6"
          >
            + Add Product
          </button>
        </div>
      </dialog>
    </>
  );
};

export default AddProductModal;
