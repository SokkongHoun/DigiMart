import React from "react";
import { useNavigate, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center mt-32">
        <div className="text-center px-10">
          <span class="material-symbols-outlined text-8xl text-success">
            check_circle
          </span>
          <h1 className="text-3xl font-semibold text-success">
            Payment Successful
          </h1>
          <p className="text-lg my-4">
            Your products are being prepared, we will contact you soon.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="btn btn-success text-custom"
          >
            Continue shopping
          </button>
          <Link
            to="/"
            className="mt-5 hover:underline text-sm text-blue-300 block"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
