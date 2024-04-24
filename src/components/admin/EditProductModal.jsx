import React, { useState } from "react";

const EditProductModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <span class="material-symbols-outlined text-base mr-2">
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
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <input
                type="number"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Reviews</span>
              </div>
              <input
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
                type="text"
                placeholder="Image url"
                className="input input-bordered w-full max-w-72"
              />
            </label>
            <div className="flex gap-3">
              <label className="form-control mt-5">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <div className="dropdown dropdown-top">
                  <div tabIndex={0} role="button" className="btn w-36 text-xs">
                    Select Category
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 mt-2"
                  >
                    <li>
                      <a>Stands</a>
                    </li>
                    <li>
                      <a>Laptop bag</a>
                    </li>
                    <li>
                      <a>Phone Case Holders</a>
                    </li>
                    <li>
                      <a>Watch Straps</a>
                    </li>
                    <li>
                      <a>Mouse pads</a>
                    </li>
                    <li>
                      <a>Cases</a>
                    </li>
                  </ul>
                </div>
              </label>
              <label className="form-control mt-5">
                <div className="label">
                  <span className="label-text">Color</span>
                </div>
                <div className="dropdown dropdown-top">
                  <div tabIndex={0} role="button" className="btn w-32 text-xs">
                    Select Color
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 mt-2"
                  >
                    <li>
                      <a>Black</a>
                    </li>
                    <li>
                      <a>Yellow</a>
                    </li>
                    <li>
                      <a>Gray</a>
                    </li>
                    <li>
                      <a>Yellow</a>
                    </li>
                  </ul>
                </div>
              </label>
            </div>
          </div>
          <button className="btn bg-yellow-700 text-custom hover:bg-yellow-800 hover:text-white mt-6">
            Update Product
          </button>
        </div>
      </dialog>
    </>
  );
};

export default EditProductModal;
