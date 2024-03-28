import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Notfoundpage.css";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-40">
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
        <div className="mt-10 text-center px-8 md:px-0">
          <div className="">
            <h1 className="my-2 text-custom font-bold text-3xl md:text-2xl">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="my-5 text-gray-300">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <button
              to="/NotFoundPage"
              className="bg-secondary py-5 px-10 rounded-lg hover:bg-third"
            >
              Take me there!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
