import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const BtnLoadingAnimation = () => {
  return (
    <div className="flex justify-center">
      <ThreeDots
        visible={true}
        height="30"
        width="30"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingAnimation;
