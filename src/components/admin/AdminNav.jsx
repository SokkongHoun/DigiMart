import React, { useContext, useEffect } from "react";
import { useLogout } from "./UseLogout";
import { ModalContext } from "../../contexts/AdminAccessContext";
import AdminModal from "../../pages/admin/AdminModal";
import { useNavigate } from "react-router-dom";

export const MenuButton = () => {
  return (
    <label
      htmlFor="my-drawer-2"
      className="btn bg-secondary hover:bg-third drawer-button 2xl:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </label>
  );
};

const AdminNav = () => {
  const handleLogout = useLogout();
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const navigate = useNavigate();

  const handleOpenAdminModal = () => {
    setIsOpen(true);
  };

  return (
    <div className=" bg-custom border-neutral-600 border-b">
      <AdminModal />
      <div className="navbar mx-auto px-7">
        <div className="flex-1">
          <MenuButton />
          <div
            onClick={() => navigate("/")}
            className="flex justify-center items-center cursor-pointer"
          >
            <img src="../../logo.png" className="w-11 ml-7 2xl:ml-0" />{" "}
            <span>
              <h1 className="text-secondCustom text-xl font-semibold ml-5">
                DigiMart
              </h1>
            </span>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleOpenAdminModal}>Admin Access</button>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
