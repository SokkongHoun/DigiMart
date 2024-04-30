import React, { useRef } from "react";

const PreviewProductModal = () => {
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const RatingIcon = () => {
    return (
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 w-4"
      />
    );
  };

  return (
    <>
      <button
        className="w-full py-2 flex items-center pl-2 hover:bg-secondary rounded-md"
        onClick={handleOpenModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
            clipRule="evenodd"
          />
        </svg>
        Preview
      </button>
      <dialog ref={modalRef} id="EditProductModal" className="modal">
        <div className="modal-box max-w-screen-sm bg-secondary">
          <form method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg text-custom">Preview product</h3>
            <hr className="mt-5 border-neutral-400" />
            <div className="w-full mt-10 grid grid-cols-2 gap-5">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-lg"
                />
              </figure>
              <div>
                <h1 className="text-2xl text-custom">Basic Tee </h1>
                <p className="text-xl text-custom">$196</p>
                <div className="flex items-center my-4">
                  <div className="rating ">
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                  </div>
                  <p className="text-neutral-400 ml-4">125 reviews</p>
                </div>
                <p className="bg-red-600 w-6 h-6 rounded-full mb-4"></p>
                <p className="text-custom">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore similique enim doloremque placeat fuga a quis incidunt?
                  Adipisci aliquam eos fugit accusantium quos in, nemo et. Ipsum
                  neque nesciunt amet.
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PreviewProductModal;
