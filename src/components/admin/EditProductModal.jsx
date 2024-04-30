import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";
import app from "../../firebaseConfig";
import { getDatabase, ref, update, onValue } from "firebase/database";

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "blue" : "#27272a",
    color: state.isSelected ? "white" : "white",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#27272a",
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#27272a",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#3d4451",
    maxWidth: "100%",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
    maxWidth: "100%",
    overflow: "visible",
    textOverflow: "initial",
    whiteSpace: "normal",
  }),
};

const colors = [
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
    class: "bg-gray-400",
    name: "Gray",
    selectedClass: "ring-gray-400",
  },
  {
    class: "bg-green-700",
    name: "Green",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-stone-500",
    name: "Gray",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-yellow-600",
    name: "Orange",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-pink-600",
    name: "Pink",
    selectedClass: "ring-gray-900",
  },
];

const EditProductModal = ({ productId }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [writeData, setWriteData] = useState({
    name: "",
    price: 0,
    rating: 0,
    reviewCount: 0,
    imgSrc: "",
    category: "",
  });

  // for syncing the Select-React data structures with the data structure of the colors object property.
  const [selectedValues, setSelectedValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deployUpdatedProductData, setDeployUpdatedProductData] = useState();
  const db = getDatabase(app);
  const productRef = ref(db, "products/data/" + productId);

  useEffect(() => {
    onValue(
      productRef,
      (snapshot) => {
        const data = snapshot.val();
        setWriteData(data);
        const colorDatabase = data.colors.map((color) => {
          return { value: color.name, label: color.name };
        });
        const transformedValues = colorDatabase.map((color) => ({
          value: color.value,
          label: color.label,
        }));
        setSelectedValues(transformedValues);
        setIsLoading(true);
      },
      {
        onlyOnce: true,
      }
    );
  }, [productId]);

  const handleWriteData = (e) => {
    const { name, value } = e.target;
    const numberFields = ["price", "rating", "reviewCount"];
    const parsedValue = numberFields.includes(name) ? parseFloat(value) : value;
    setWriteData((prevData) => ({ ...prevData, [name]: parsedValue }));
  };

  const colorList = colors.map((list) => {
    return { value: list.name, label: list.name, id: crypto.randomUUID() };
  });

  const handleColorChange = (selectedOptions) => {
    const newSelectedOptions = selectedOptions.map((option) => {
      const matchingColorObject = colors.find(
        (color) => color.name === option.value
      );
      return matchingColorObject ? matchingColorObject : option;
    });
    setSelectedValues(selectedOptions);
    const newWriteData = { ...writeData };
    newWriteData.colors = newSelectedOptions;
    setDeployUpdatedProductData(newWriteData);
  };

  let finalProductData;
  const handleUpdateProduct = async () => {
    if (deployUpdatedProductData == null) {
      finalProductData = writeData;
    } else {
      finalProductData = deployUpdatedProductData;
    }

    if (!productId) {
      console.error("Product ID is missing. Cannot update product.");
      return;
    }
    const productPath = `products/data/${productId}`;

    try {
      setIsLoading(true);
      await update(ref(db, productPath), finalProductData);
      toast.success("Updated product successfully");
      setIsModalOpen(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Unable to update the product");
      setIsLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="w-full py-2 flex items-center pl-2 hover:bg-secondary rounded-md"
        onClick={openModal}
      >
        <span className="material-symbols-outlined text-base mr-2">
          edit_square
        </span>
        Edit
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
          <h3 className="font-bold text-lg">Update Product Info</h3>
          <hr className="mt-5 border-neutral-400" />
          <div className="grid grid-cols-2 gap-5">
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Product Name</span>
              </div>
              <input
                value={writeData.name}
                type="text"
                onChange={handleWriteData}
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                value={writeData.price}
                type="number"
                onChange={handleWriteData}
                name="price"
                placeholder="Price"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <input
                value={writeData.rating}
                type="number"
                onChange={handleWriteData}
                name="rating"
                placeholder="rating"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Reviews</span>
              </div>
              <input
                onChange={handleWriteData}
                value={writeData.reviewCount}
                name="reviewCount"
                type="number"
                placeholder="Reviews"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                value={writeData.imgSrc}
                type="text"
                placeholder="Image url"
                name="imgSrc"
                onChange={handleWriteData}
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control mt-5">
              <div>
                <div className="label">
                  <span className="label-text">category</span>
                </div>
                <select
                  value={writeData.category}
                  className="select w-full text-white"
                  onChange={handleWriteData}
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
            </label>
          </div>
          <div className="mt-5">
            <div className="label">
              <span className="label-text">Change, Remove Colors option</span>
            </div>
            <div className="flex items-center">
              {isLoading && (
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  value={selectedValues}
                  isMulti
                  options={colorList}
                  onChange={handleColorChange}
                  styles={customStyles}
                />
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="btn bg-yellow-600 text-custom hover:bg-yellow-700 hover:text-white mt-6"
              onClick={handleUpdateProduct}
            >
              Update Product
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditProductModal;
