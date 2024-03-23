import React from "react";
import "../styles/Navbar.css";

const Homepage = () => {
  function imageSliders() {
    const slidePhotos = [
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_936.jpg?v=1699443407&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_937.jpg?v=1699451166&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_7.jpg?v=1699443407&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_933.jpg?v=1699443409&width=720",
    ];
    const mapSlidePhoto = slidePhotos.map((img, index) => {
      return <img key={index} className=" w-full rounded-md" src={img} />;
    });
    return mapSlidePhoto;
  }
  return (
    <main>
      <div className="mt-20 sm:mt-30 ">
        <div className="flex flex-col text-center items-center">
          <p className="flex gap-1 items-center bg-black px-2 rounded-xl text-xs font-semibold mb-4 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                clipRule="evenodd"
              />
            </svg>
            5.00 from 144+ reviews
          </p>
          <h1 className="high-tech-title text-3xl font-semibold sm:text-4xl">
            High-Tech Accessories for Innovative Realities
          </h1>
          <p className="elevate-title text-sm text-custom mt-4">
            Elevate your technology experience to a whole new level with our
            meticulously designed accessories.
          </p>
          <div className=" flex items-center gap-5 mt-8">
            <button className="bg-black px-6 py-4 rounded-md text-sm cursor-pointer">
              Shop All
            </button>
            <a href="#" className="text-sm cursor-pointer hover:underline">
              See More
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 object-contain items-end mt-8">
          {imageSliders()}
        </div>
        <div className="body-content mt-20 bg-black pt-14 flex justify-center">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[400px,1fr] lg[min-width: 1100px]:gap-56 px-6">
            <div className="text-section text-left mb-4">
              <h1>Logo</h1>
              <h1 className="text-3xl font-semibold">Watch Straps</h1>
              <p className="product-info-paragraph py-3 text-first font-bold">
                Classic leather to modern silicone, our range blends style and
                durability, showcasing personal flair.
              </p>
              <p className="font-semibold flex gap-2">
                <span className="cursor-pointer hover:underline">
                  Shop Watch Straps
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </p>
            </div>
            <img
              className="rounded-2xl w-auto"
              src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Watch_Straps.jpg?v=1699443410&width=940"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
