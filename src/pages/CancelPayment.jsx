import React from "react";
import { useNavigate, Link } from "react-router-dom";

const CancelPayment = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center mt-32">
        <div className="text-center px-10">
          <span className="material-symbols-outlined text-8xl text-error">
            error
          </span>
          <h1 className="text-3xl font-semibold text-error">Payment Failed</h1>
          <p className="text-lg my-4">
            Something went wrong. Go back and to your cart and try again
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="btn btn-error text-custom"
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
};

export default CancelPayment;
