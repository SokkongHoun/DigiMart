import React, { useContext, useEffect } from "react";
import { useLogout } from "./UseLogout";
import { ModalContext } from "../../contexts/AdminAccessContext";
import AdminModal from "../../pages/admin/AdminModal";
export const MenuButton = () => {
  return (
    <label
      htmlFor="my-drawer-2"
      className="btn bg-secondary hover:bg-third drawer-button lg:hidden"
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

  const handleOpenAdminModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className=" bg-secondary">
      <AdminModal />
      <div className="navbar mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-screen-2xl">
        <div className="flex-1">
          <MenuButton />
          <img src="../../logo.png" className="w-11 ml-7 lg:ml-0" />
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
