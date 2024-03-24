import { React, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import "../styles/Navbar.css";

const DropdownSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const SearchIcon = () => (
    <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
      <p className="px-2 hidden md:inline-block hover:text-first">Search</p>
    </div>
  );

  return (
    <>
      <SearchIcon />
      {isOpen && (
        <div
          id="dropdownSearch"
          className="z-10 bg-custom rounded-lg shadow w-60 dark:bg-gray-700 absolute"
          style={{ top: "110%", right: "10%" }}
        >
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              </div>
              <input
                type="text"
                id="input-group-search"
                className="block w-full bg-secondary p-2 ps-10 text-sm text-custom border  rounded-lg focus:ring-0 focus:border-gray-500   dark:text-white dark:focus:ring-0 "
                placeholder="Search products"
              />
            </div>

            <div>
              <h1>Item</h1>
              <h1>Item</h1>
              <h1>Item</h1>
              <h1>Item</h1>
              <h1>Item</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const userIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-6 h-6 ml-4"
    >
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

function NavbarSection() {
  return (
    <>
      <p className="text-center bg-black text-xs">
        Special Sneak Peek for Our Beloved Community
      </p>
      <Navbar fluid rounded className="bg-inherit relative overflow-visible">
        <Navbar.Toggle />
        <Navbar.Brand className="cursor-pointer">
          <h1 className="text-2xl">Logo</h1>
        </Navbar.Brand>
        <div className="flex items-center md:order-2">
          <DropdownSearch />
          <Dropdown arrowIcon={false} inline label={userIcon()}>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Collapse>
          <div className="cursor-pointer hover:text-gray-300">Home</div>
          <div className="cursor-pointer hover:text-gray-300">Shop</div>
          <div className="cursor-pointer hover:text-gray-300">About</div>
        </Navbar.Collapse>
      </Navbar>
      <hr className="border-gray-700" />
    </>
  );
}

export default NavbarSection;
