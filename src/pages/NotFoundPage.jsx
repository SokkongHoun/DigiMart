import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Notfoundpage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const toHomepage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center pt-10 pb-20">
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
        <div className="mt-10 text-center px-8 md:px-0">
          <div className="">
            <h1 className="my-2 text-custom font-bold text-3xl md:text-2xl">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="my-5 text-gray-300">
              Sorry about that! Please return to our homepage
            </p>
            <button
              onClick={toHomepage}
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
