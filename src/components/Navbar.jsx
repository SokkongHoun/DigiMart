import { React, useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function toggleIcon() {
  return (
    <>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </>
  );
}
const searchIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        viewBox="0 0 22 22"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    </>
  );
};
const blueSearchIcon = () => {
  return (
    <>
      <svg
        className="w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </>
  );
};
function RightSection() {
  return (
    <>
      <div className="relative mr-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <div className="absolute bottom-3 left-3 px-2.5 py-0.5 text-xs text-white bg-red-500 rounded-full">
          2
        </div>
      </div>

      <Dropdown
        dismissOnClick={false}
        renderTrigger={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      >
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </>
  );
}
const asideSection = () => {
  return (
    <div className="h-full px-3 pb-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="#"
            className="flex items-center p-2 rounded-lg dark:text-custom hover:bg-gray-600 group "
          >
            <svg
              className="w-5 h-5 text-custom transition duration-75 dark:text-gray-50 group-hover:text-white dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="ms-3">Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
const searchFieldSection = () => {
  return (
    <>
      <form className="flex items-center max-w-lg mx-auto">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative sm:w-96 w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {searchIcon()}
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search products..."
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 pl-2.5 ms-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-400"
        >
          {blueSearchIcon()}
        </button>
      </form>
    </>
  );
};

const brandingSection = () => {
  return (
    <>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 me-2"
        alt="FlowBite Logo"
      />
      <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
        Brand
      </span>
    </>
  );
};

export function NavbarSection() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth >= 640) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <>
      <nav className="glassmorphism fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between sm:flex-wrap">
            <div className="flex items-center justify-start rtl:justify-end ">
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {toggleIcon()}
              </button>
              <NavLink to={"/"} className="flex ms-2 md:me-24">
                {brandingSection()}
              </NavLink>
            </div>
            <div className="hidden sm:flex">{searchFieldSection()}</div>
            <div className="flex items-center cursor-pointer">
              <RightSection />
            </div>
          </div>
        </div>
        <div>
          <div className="sm:flex justify-evenly hidden">
            <h1>All products</h1>
            <h1>Electronic</h1>
            <h1>Kitchen appliance</h1>
          </div>
          <div className="sm:hidden inline-block w-full pr-4 pl-5 mb-4">
            {searchFieldSection()}
          </div>
        </div>
      </nav>
      <aside
        style={{
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
        }}
        id="logo-sidebar"
        className="fixed top-0 left-0 z-60 w-64 h-screen pt-20 transition-transform -translate-x-full bg-custom  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="mt-14">{asideSection()}</div>
      </aside>
    </>
  );
}

export default NavbarSection;
