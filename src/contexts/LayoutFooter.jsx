import React from "react";
import Footer from "../components/Footer";

const LayoutFooter = ({ children, includeFooter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      {includeFooter && <Footer />}
    </div>
  );
};

export default LayoutFooter;
