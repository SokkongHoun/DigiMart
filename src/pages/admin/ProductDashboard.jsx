import React from "react";
import { Link } from "react-router-dom";
import CRUDProductModal from "../../components/admin/CRUDProductModal";

const ProductTable = () => {
  const Sidebar = () => {
    return (
      <div className="drawer 2xl:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-[1000px]">
          {/* pages contents */}
          <CRUDProductModal />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-secondary text-base-content border-r border-neutral-600">
            {/* Sidebar content here */}
            <li>
              <Link to="/" className="justify-between text-custom">
                Dashboard
                <span className="badge bg-[#00a9a5] text-custom border-[#00a9a5]">
                  New
                </span>
              </Link>
            </li>
            <li>
              <Link to="/productdashboard" className="text-custom">
                Product Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default ProductTable;
