import React from "react";
import "../styles/Aboutus.css";
import { Timeline } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const About = () => {
  const container = "mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-screen-2xl";

  const TimeLine = () => {
    const aboutUsDetails = [
      {
        year: "2018",
        title: "Founding and Niche Focus",
        subtitle:
          "The store was established with a clear focus on providing high-quality, innovative accessories for a range of tech gadgets. The store faced the challenge of carving out a niche in a crowded market.",
        imageSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_2.jpg?v=1700749568&width=1200",
      },
      {
        year: "2020",
        title: "E-Commerce Growth",
        subtitle:
          "Store expanded its e-commerce platform in 2019, improving its website's user experience and logistics. During the pandemic, the store capitalized on the increased demand as people worked from home.",
        imageSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_3.jpg?v=1700749569&width=1200",
      },
      {
        year: "2022",
        title: "Product Line Expansion",
        subtitle:
          "Store diversified its product range to include eco-friendly and customizable accessories, responding to consumer trends. It also launched a customer loyalty program and interactive online community platform.",
        imageSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_4.jpg?v=1700749569&width=1200",
      },
      {
        year: "2023",
        title: "Technological Advancements",
        subtitle:
          "By 2023, the store had become a leader in tech accessory innovation, incorporating advanced technologies like wireless charging and smart connectivity into its products.",
        imageSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_5.jpg?v=1700749569&width=1200",
      },
    ];

    return (
      <>
        <p className="text-xs text-first font-bold">OUR STORY</p>
        <h1 className="text-3xl font-semibold py-4">The Start of Journey</h1>
        <p className="mb-5">
          Join us on this journey as we embrace the future of technology.
        </p>
        <Timeline>
          {aboutUsDetails.map((value, index) => {
            return (
              <Timeline.Item key={index}>
                <Timeline.Point />
                <Timeline.Content>
                  <div className="grid sm:grid-cols-1 lg:grid-cols-[300px,1fr] gap-5">
                    <div>
                      <Timeline.Time>
                        <h1 className="text-custom text-6xl font-bold">
                          {value.year}
                        </h1>
                      </Timeline.Time>
                      <Timeline.Title>
                        <div className="text-custom mt-5">{value.title}</div>
                      </Timeline.Title>
                      <Timeline.Body>
                        <p className="text-first mt-3">{value.subtitle}</p>
                      </Timeline.Body>
                    </div>
                    <div>
                      <img className="rounded-xl" src={value.imageSrc} />
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </>
    );
  };

  const carousel = () => {
    const carouselDetails = [
      {
        logo: <span class="material-symbols-outlined text-5xl">back_hand</span>,
        imgSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_6.jpg?v=1700749569&width=1500",
        title: "Quality",
        subTitle:
          " We prioritize offering high-quality tech accessories that meet or exceed industry standards",
      },
      {
        logo: <span class="material-symbols-outlined text-5xl">eco</span>,
        imgSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_7.jpg?v=1700749568&width=1500",
        title: "Innovation",
        subTitle:
          "By staying at the forefront of trends and introducing innovative accessories, we provide customers with cutting-edge solutions.",
      },
      {
        logo: (
          <span class="material-symbols-outlined text-5xl">rewarded_ads</span>
        ),
        imgSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_8.jpg?v=1700749569&width=1500",
        title: "Satisfaction",
        subTitle:
          "Customer satisfaction is our top priority. We strive to understand our customers' preferences and requirements to deliver personalized experiences.",
      },
      {
        logo: (
          <span class="material-symbols-outlined text-5xl">trending_up</span>
        ),
        imgSrc:
          "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_9.jpg?v=1700749569&width=1500",
        title: "Integrity",
        subTitle:
          "We take pride in maintaining strong moral principles and treating our customers with respect and fairness.",
      },
    ];

    let mapCarouselDetails;

    return (
      <>
        <div className="carousel-container md:h-96 ">
          <Carousel
            onSlideChange={(index) => console.log("onSlideChange()", index)}
          >
            {
              (mapCarouselDetails = carouselDetails.map((val, index) => {
                return (
                  <div
                    key={index}
                    className="grid sm:grid-cols-1 md:grid-cols-[300px,1fr] lg:grid-cols-[400px,600px] gap-5 px-10 justify-center items-center"
                  >
                    <div>
                      <span>{val.logo}</span>
                      <h1 className="py-10 text-2xl font-semibold sm:text-3xl">
                        {val.title}
                      </h1>
                      <p className="text-first">{val.subTitle}</p>
                    </div>
                    <div>
                      <img className=" sm:w-full rounded-lg" src={val.imgSrc} />
                    </div>
                  </div>
                );
              }))
            }
          </Carousel>
        </div>
      </>
    );
  };

  const qAndAsection = () => {
    const questionAndanswers = [
      {
        q: "What's the advantage of using a high-quality screen protector for my smartphone?",
        a: "A high-quality screen protector not only safeguards your smartphone's display from scratches and minor impacts but also can enhance screen clarity, reduce fingerprint smudges, and even provide blue light filtering.",
      },
      {
        q: "How often should I replace my charging cables to ensure optimal charging speeds?",
        a: "While the lifespan of a charging cable can vary based on usage and build quality, it's advisable to inspect your cables regularly for signs of wear, fraying, or damage. If you notice a significant drop in charging speeds or syncing issues, it might be time to replace the cable. On average, with daily use, considering a replacement every 1-2 years is a good practice.",
      },
      {
        q: "Are wireless earbud cases just for storage, or do they serve another function?",
        a: "While they certainly provide a convenient storage solution, many wireless earbud cases also act as charging docks for the earbuds. When you place the earbuds inside, they charge by drawing power from the case's built-in battery. This allows for multiple recharges on the go, extending your listening time without needing a power outlet.",
      },
      {
        q: "What's the difference between a hard case and a soft case for tech gadgets, and which one should I choose?",
        a: "Hard cases generally offer rigid protection, making them suitable for shielding devices from impacts, drops, and external pressures. They're ideal if you're traveling or if your device is frequently in potentially hazardous environments. Soft cases, on the other hand, are usually more lightweight, flexible, and can absorb shocks. They're great for protecting against scratches, minor bumps, and everyday wear.",
      },
    ];

    return questionAndanswers.map((val, index) => {
      return (
        <div
          key={index}
          className="collapse collapse-arrow bg-secondary mb-2 py-3 pl-3"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">{val.q}</div>
          <div className="collapse-content">
            <p className="text-sm text-first">{val.a}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <main>
      <section className={`${container}`}>
        <div className="text-center mt-28">
          <h1 className="text-custom text-4xl md:text-5xl font-semibold">
            Strive for the Highest Standards to Ensure Innovative Satisfaction
          </h1>
          <h3 className="text-lg md:text-xl font-bold py-10 px-0 lg:px-64">
            Dedication to excellence ensures that customers receive top-quality
            products and services and leave them highly satisfied.
          </h3>
          <div className="flex justify-center gap-4 items-center">
            <div className="team-aboutus-photos">
              <img src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Team_Member_05.jpg?v=1700749567&width=140" />
              <img src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Team_Member_07.jpg?v=1700749566&width=140" />
              <img src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Team_Member_08.jpg?v=1700749567&width=140" />
              <img src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Team_Member_06.jpg?v=1700749566&width=140" />
            </div>
            <div>
              <p className="text-base text-first font-bold text-left">
                Building Trust through <br />
                Quality
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-20">
          <img
            className="rounded-2xl"
            src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Hero_Image.jpg?v=1700749570&width=2000"
          />
        </div>
      </section>

      <section className={` bg-secondary pt-20 pb-20`}>
        <div
          className={`${container} grid sm:grid-cols-1 lg:grid-cols-[500px,1fr] gap-5`}
        >
          <div>
            <span className="material-symbols-outlined bg-black py-4 px-5 rounded-md text-first mb-5">
              bolt
            </span>
            <h1 className="text-2xl md:text-3xl">
              Shop with Confidence at Our Trusted Tech Accessory Retailer
            </h1>
            <p className="text-sm md:text-base lg:text-md text-first font-semibold tracking-wide py-4">
              When you choose to shop with us, you can trust that you are in
              capable hands. Here's why you can shop with confidence.
            </p>
            <button className="bg-black py-4 px-6 rounded-lg text-sm font-semibold">
              <Link to="/shop">Explore Our Products</Link>
            </button>
          </div>
          <div className="pt-5">
            <img
              className="rounded-xl"
              src="https://digital-theme-minimalist.myshopify.com/cdn/shop/files/About-Image_1.jpg?v=1700749569&width=1800"
              alt="our story"
            />
          </div>
        </div>
      </section>

      <section className={`${container} mt-20`}>
        <TimeLine />
      </section>

      <section className="bg-black">{carousel()}</section>

      <section
        className={`mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-screen-lg mt-20`}
      >
        <div className="text-center mb-10">
          <h3 className="text-xs text-first">FREQUENTLY ASKED QUESTIONS</h3>
          <h1 className="text-3xl font-semibold py-5">Answers & Questions</h1>
          <p className="text-sm">
            This resource is crafted to help you find information easily and
            efficiently.
          </p>
        </div>
        {qAndAsection()}
      </section>
    </main>
  );
};

export default About;
