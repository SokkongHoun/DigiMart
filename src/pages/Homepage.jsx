import React from "react";
import "../styles/Homepage.css";
import Marquee from "react-fast-marquee";

const Homepage = () => {
  function imageSliders() {
    const slidePhotos = [
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_936.jpg?v=1699443407&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_937.jpg?v=1699451166&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_7.jpg?v=1699443407&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_933.jpg?v=1699443409&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_934_c47c5560-5484-4617-b878-119b9eb5a566.jpg?v=1708676781&width=720",
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_935.jpg?v=1699443407&width=720",
    ];
    const mapSlidePhoto = slidePhotos.map((img, index) => {
      return (
        <img
          key={index}
          className="w-64 h-64 md:h-96 object-cover md:w-96 px-2 rounded-2xl"
          src={img}
        />
      );
    });
    return mapSlidePhoto;
  }

  const ProductSection = () => {
    const details = [
      {
        img: {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          ),
          span: (
            <span className="material-symbols-outlined bg-custom text-first p-4 rounded-lg mb-4">
              watch
            </span>
          ),
          imgDisplay:
            "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Watch_Straps.jpg?v=1699443410&width=940",
        },
        title: "Watch Straps",
        info: "Classic leather to modern silicone, our range blends style and durability, showcasing personal flair",
        aLink: "Shop Watch Straps",
      },
      {
        img: {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          ),
          span: (
            <span className="material-symbols-outlined bg-custom text-first p-4 rounded-lg mb-4">
              wallet
            </span>
          ),
          imgDisplay:
            "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Phone_Card_Holders.jpg?v=1699443409&width=1400",
        },
        title: "Phone Card Holders",
        info: "Designed for convenience, sleek attachments keep cards close, eliminating bulky wallets for easy access.",
        aLink: "Shop Card Holders",
      },
      {
        img: {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          ),
          span: (
            <span className="material-symbols-outlined bg-custom text-first p-4 rounded-lg mb-4">
              ad_units
            </span>
          ),
          imgDisplay:
            "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Cases.jpg?v=1699443409&width=1400",
        },
        title: "Cases",
        info: "Protect and personalize your device with resilient cases, crafted for elegance and individuality.",
        aLink: "Shop Cases",
      },
      {
        img: {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          ),
          span: (
            <span className="material-symbols-outlined bg-custom text-first p-4 rounded-lg mb-4">
              jamboard_kiosk
            </span>
          ),
          imgDisplay:
            "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Stands.jpg?v=1699443409&width=1400",
        },
        title: "Stands",
        info: "Optimal viewing with our versatile stands for videos, calls, and browsing. Stable support, ergonomic design.",
        aLink: "Shop Stands",
      },
    ];

    let mapProductCategory = details.map((prod, index) => {
      return (
        <>
          <div
            key={index}
            className="grid grid-cols-1 gap-16 lg:grid-cols-[400px,1fr] max-[1100px]:gap-4 px-6"
          >
            <div className="text-section text-left mb-4">
              {prod.img.span}
              <h1 className="text-3xl font-semibold">{prod.title}</h1>
              <p className="product-info-paragraph py-3 text-first font-bold">
                {prod.info}
              </p>
              <p className="font-semibold flex gap-2">
                <span className="cursor-pointer hover:underline">
                  {prod.aLink}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
            <img className="rounded-2xl w-auto" src={prod.img.imgDisplay} />
          </div>
          <hr
            className={`border-secondary ${
              index === details.length - 1 ? "hidden" : "block"
            }`}
            style={{ width: "95%" }}
          />
        </>
      );
    });

    return mapProductCategory;
  };

  const HomepageProductSection = () => {
    return (
      <div>
        <div className="flex justify-between items-end mt-20 px-6">
          <div>
            <p className="text-xs text-first">PRODUCTS</p>
            <h1 className="text-3xl font-semibold py-5">
              Personalized Paths for Each Purpose
            </h1>
            <h3 className="font-semibold">
              Ensuring your distinct needs are met with precision and care.
            </h3>
          </div>
          <div>
            <button className="bg-black hidden   min-[750px]:inline-block px-6 py-4 rounded-md text-sm cursor-pointer">
              Shop All
            </button>
          </div>
        </div>
        <div className="product-homepage">
          <div></div>
        </div>
      </div>
    );
  };

  return (
    <main className="mt-20 sm:mt-30">
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
      <section className="mt-10">
        <Marquee direction="left">{imageSliders()}</Marquee>
      </section>
      <div className="body-content mt-20 bg-black pt-14 flex flex-col items-center gap-10 pb-20">
        <ProductSection />
      </div>
      <HomepageProductSection />
    </main>
  );
};

export default Homepage;
