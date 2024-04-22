import React from "react";
import Footer from "../components/Footer";

const LayoutFooter = ({ children, includeFooter = false }) => {
  return (
    <>
      {children}
      {includeFooter && <Footer />}
    </>
  );
};

export default LayoutFooter;
