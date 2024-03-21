import React from "react";
import { Card } from "flowbite-react";

const HomepageContents = () => {
  return (
    <>
      <a href="#">
        <p className="text-sm sm:text-lg font-light tracking-tight text-custom dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </p>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-lg font-bold text-custom dark:text-white">
          $599
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-1 sm:py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          cart
        </a>
      </div>
    </>
  );
};

const Homepage = () => {
  return (
    <div className="flex flex-wrap -mx-4 gap-3 justify-center">
      <Card
        className="w-48 sm:w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/5 mb-5 bg-custom"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ca79d356-421f-4a96-a823-b695f15c7a34/in-season-tr-13-workout-shoes-BDTlPf.png"
      >
        <HomepageContents />
      </Card>
      <Card
        className="w-48 sm:w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/5 mb-5 bg-custom"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ca79d356-421f-4a96-a823-b695f15c7a34/in-season-tr-13-workout-shoes-BDTlPf.png"
      >
        <HomepageContents />
      </Card>
      <Card
        className="w-48 sm:w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/5 mb-5 bg-custom"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ca79d356-421f-4a96-a823-b695f15c7a34/in-season-tr-13-workout-shoes-BDTlPf.png"
      >
        <HomepageContents />
      </Card>
      <Card
        className="w-48 sm:w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/5 mb-5 bg-custom"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ca79d356-421f-4a96-a823-b695f15c7a34/in-season-tr-13-workout-shoes-BDTlPf.png"
      >
        <HomepageContents />
      </Card>
    </div>
  );
};

export default Homepage;
