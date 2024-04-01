import React, { Fragment, useState } from "react";
import "../styles/Navbar.css";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

function NavbarSection({ cart }) {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // copy the "get this" object to have another category
  const navigation = {
    categories: [
      // get this
      {
        id: "Collections",
        name: "Collections",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
            imageAlt:
              "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", href: "#" },
              { name: "Dresses", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Denim", href: "#" },
              { name: "Sweaters", href: "#" },
              { name: "T-Shirts", href: "#" },
              { name: "Jackets", href: "#" },
              { name: "Activewear", href: "#" },
              { name: "Browse All", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Significant Other", href: "#" },
            ],
          },
        ],
      },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const DropdownSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const SearchIcon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        onClick={() => setIsOpen(!isOpen)}
        className="w-6 h-6 cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
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

  const handleViewCarts = () => {
    setOpenModal(true);
  };

  const MobileMenu = () => {
    return (
      <>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative z-60 flex w-full max-w-xs flex-col overflow-y-auto bg-custom pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "border-black text-custom"
                                  : "border-transparent text-first",
                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel
                          key={category.name}
                          className="space-y-10 px-4 pb-8 pt-10"
                        >
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative text-sm"
                              >
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-cover object-center"
                                  />
                                </div>
                                <Link
                                  href={item.href}
                                  className="mt-6 block font-medium text-first"
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-medium text-custom"
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link
                                      href={item.href}
                                      className="-m-2 block p-2 text-gray-300 hover:underline"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                  <div className="flex flex-col space-y-6 border-t border-gray-200 px-4 py-6">
                    <Link to="/shop" className="cursor-pointer">
                      Shop
                    </Link>
                    <Link to="/about" className="cursor-pointer">
                      About
                    </Link>
                  </div>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <Link
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-300"
                      >
                        Sign in
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-300"
                      >
                        Create account
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <Link href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-300">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    );
  };

  const MobileMenuButton = () => {
    return (
      <>
        <button
          type="button"
          className="relative rounded-md bg-secondary p-2 text-gray-400 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </>
    );
  };

  const BrandLogo = () => {
    return (
      <div className="ml-4 flex lg:ml-0">
        <Link to="/">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="brand logo"
          />
        </Link>
      </div>
    );
  };

  const FlyOutMenu = () => {
    return (
      <>
        <ShoppingCart
          openModal={openModal}
          setOpenModal={setOpenModal}
          cart={cart}
        />
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
          <div className="flex h-full space-x-8 ">
            {navigation.categories.map((category) => (
              <Popover key={category.name} className="flex">
                {({ open }) => (
                  <>
                    <div className="relative flex">
                      <Popover.Button
                        className={classNames(
                          open
                            ? "border-blue-800 text-blue-500"
                            : "border-transparent text-custom hover:text-gray-300",
                          "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                        )}
                      >
                        {category.name}
                      </Popover.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />

                        <div className="relative bg-white z-50">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <Link
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </Link>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <Link
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}

            <div className="flex items-center gap-8">
              <Link to="/shop" className="cursor-pointer">
                Shop
              </Link>
              <Link to="/about" className="cursor-pointer">
                About
              </Link>
            </div>
          </div>
        </Popover.Group>
      </>
    );
  };

  const AuthorizeSection = () => {
    return (
      <>
        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Link
              href="#"
              className="text-sm font-medium text-custom hover:text-gray-300"
            >
              Sign in
            </Link>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <Link
              href="#"
              className="text-sm font-medium text-custom hover:text-gray-300"
            >
              Create account
            </Link>
          </div>

          <div className="hidden lg:ml-8 lg:flex">
            <Link
              href="#"
              className="flex items-center text-custom hover:text-gray-300"
            >
              <img
                src="https://tailwindui.com/img/flags/flag-canada.svg"
                alt=""
                className="block h-auto w-5 flex-shrink-0"
              />
              <span className="ml-3 block text-sm font-medium">CAD</span>
              <span className="sr-only">, change currency</span>
            </Link>
          </div>

          {/* Search */}
          <div className="flex lg:ml-6">
            <DropdownSearch />
          </div>

          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6">
            <Link href="#" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
                onClick={handleViewCarts}
              />
              <span className="ml-2 text-sm font-medium text-custom">
                {cart.length}
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="bg-white sticky top-0 z-40">
      {/* Mobile menu */}
      <MobileMenu />
      <header className="relative bg-custom z-40">
        <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-custom"
        >
          <div>
            <div className="flex h-16 items-center">
              <MobileMenuButton />
              {/* Logo */}
              <BrandLogo />
              <FlyOutMenu />
              {/* Sign In / Sign Up */}
              <AuthorizeSection />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavbarSection;
