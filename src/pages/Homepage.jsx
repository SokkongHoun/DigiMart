import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import { useNavigate, Link } from "react-router-dom";
import ProductQuickViews from "../components/ProductQuickViews";
import { FirebaseData } from "../contexts/productData";
import TypewriterEffect from "../components/TyperWriterEffect";

const featureDetails = [
  {
    imageSrc:
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Image01.jpg?v=1699443414&width=535",
    title: "Superior Craftsmanship",
    subTitle: "Quality and function create safeguarding laptop bags.",
  },
  {
    imageSrc:
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Image02.jpg?v=1699443406&width=535",
    title: "Adjustable Strap",
    subTitle: "Exquisitely crafted for your elegance and comfort.",
  },
  {
    imageSrc:
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Image03.jpg?v=1699443407&width=535",
    title: "Non-Slip Base",
    subTitle: "Smooth mouse control with added desk elegance.",
  },
  {
    imageSrc:
      "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Image04.jpg?v=1699443406&width=535",
    title: "Quick Installation",
    subTitle: "Effortlessly switch straps for versatile style changes.",
  },
];
const slidePhotos = [
  "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_936.jpg?v=1699443407&width=720",
  "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_937.jpg?v=1699451166&width=720",
  "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_7.jpg?v=1699443407&width=720",
  "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_933.jpg?v=1699443409&width=720",
  "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_934_c47c5560-5484-4617-b878-119b9eb5a566.jpg?v=1708676781&width=720",
  "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_935.jpg?v=1699443407&width=720",
];
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

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productData } = useContext(FirebaseData);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/shop");
  }
  const BannerSection = () => {
    return (
      <div className="flex flex-col text-center items-center bg-custom pt-20 sm:pt-32">
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
          High-Tech Accessories for Innovative <TypewriterEffect />
        </h1>
        <h1 className="elevate-title text-sm text-custom mt-4">
          Elevate your technology experience to a whole new level with our
          meticulously designed accessories
        </h1>
        <div className=" flex items-center gap-5 mt-8">
          <button
            className="bg-black px-6 py-4 rounded-md text-sm cursor-pointer"
            onClick={handleNavigate}
          >
            Shop All
          </button>
          <Link to="/shop" className="text-sm cursor-pointer hover:underline">
            See More
          </Link>
        </div>
      </div>
    );
  };

  const imageSliders = () => {
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
  };

  const ProductSection = () => {
    let mapProductCategory = details.map((prod, index) => {
      return (
        <div
          key={index}
          className={`flex flex-col items-center  bg-secondary ${
            index === 0 ? "pt-20" : ""
          } ${index === details.length - 1 ? "pb-20" : ""}`}
        >
          <div className="flex flex-col lg:flex lg:flex-row mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-screen-2xl">
            <div className="text-section text-left mb-4 pr-14">
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
            <img
              className="rounded-2xl w-full xl:max-w-[940px] lg:max-w-[600px] object-cover"
              src={prod.img.imgDisplay}
            />
          </div>
          <hr
            className={`border-secondary ${
              index === details.length - 1 ? "hidden" : "block"
            } mt-10 mb-10`}
            style={{ width: "95%" }}
          />
        </div>
      );
    });

    return mapProductCategory;
  };

  const FeaturesSection = () => {
    let MapFeatureDetails = featureDetails.map((val, index) => {
      return (
        <div key={index} className="flex flex-col">
          <img className="rounded-2xl" src={val.imageSrc} />
          <h3 className="text-xl sm:text-2xl py-4 font-semibold">
            {val.title}
          </h3>
          <p className="text-sm text-first">{val.subTitle}</p>
        </div>
      );
    });

    return (
      <>
        <section className="mt-20 bg-secondary pt-20 pb-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-screen-2xl">
            <div className="mb-5">
              <p className="text-xs text-first">FEATURES</p>
              <h1 className="text-2xl md:text-3xl font-semibold py-4">
                Crafted with Italian Leather
              </h1>
              <p className="text-sm ">
                Crafted meticulously with genuine Italian leather, mindful of
                environmental practices.
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {MapFeatureDetails}
            </div>
          </div>
        </section>
      </>
    );
  };

  const HomepageProductSection = () => {
    const selectedItems = productData.slice(20, 26);

    const keyingSelectedItems = selectedItems.map((value) => {
      return { ...value, keyId: crypto.randomUUID() };
    });

    const handleProductViews = (product) => {
      setSelectedProduct(product);
      setIsOpen(true);

      console.log(isOpen);
      console.log(selectedProduct);
    };

    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-screen-2xl mt-20">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-first">PRODUCTS</p>
            <h1 className="text-2xl md:text-3xl font-semibold py-5">
              Personalized Paths for Each Purpose
            </h1>
            <h3 className="font-semibold">
              Ensuring your distinct needs are met with precision and care.
            </h3>
          </div>
          <div>
            <button
              className="bg-black hidden min-[750px]:inline-block px-6 py-4 rounded-md text-sm cursor-pointer"
              onClick={handleNavigate}
            >
              Shop All
            </button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {keyingSelectedItems.map((product) => (
            <div
              key={product.keyId}
              className="group relative cursor-pointer"
              onClick={() => handleProductViews(product)}
            >
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90">
                <img src={product.imgSrc} />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-custom font-semibold">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-lg font-semibold text-custom">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const HomepageStorySection = () => {
    function handleNavigate() {
      navigate("/about");
    }
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-screen-2xl pt-20">
        <div className="grid sm:grid-cols-1 lg:grid-cols-[500px,1fr] gap-5">
          <div>
            <span className="material-symbols-outlined bg-black py-4 px-5 rounded-md text-first mb-5">
              bolt
            </span>
            <h1 className="text-2xl md:text-3xl">
              Discover Behind Our Tech Accessories Store
            </h1>
            <p className="text-sm md:text-base lg:text-md text-first font-semibold tracking-wide py-4">
              By harnessing digital tools and strategies, we ensure that every
              effort converges on growth, driving tangible financial outcomes
              and maximizing returns on investment.
            </p>
            <button
              onClick={handleNavigate}
              className="bg-black py-4 px-6 rounded-lg text-sm font-semibold"
            >
              Explore Our Story
            </button>
          </div>
          <div className="pt-5">
            <img
              className="rounded-xl"
              src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/Rectangle_925.jpg?v=1699447723&width=1800"
              alt="our story"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
      {selectedProduct && (
        <ProductQuickViews
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productData={selectedProduct}
        />
      )}
      <BannerSection />
      <section className="pt-10 pb-20 bg-custom">
        <Marquee direction="left">{imageSliders()}</Marquee>
      </section>
      <section>
        <ProductSection />
      </section>
      <HomepageProductSection />
      <FeaturesSection />
      <HomepageStorySection />
    </main>
  );
};

export default Homepage;
