import React, { Fragment, useContext, useState } from "react";
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
import { SearchProduct } from "./SearchProduct.jsx";
import { CartContext } from "../App.jsx";
import { ShopContext } from "../App.jsx";

function NavbarSection() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { cart } = useContext(CartContext);
  const { handleFilterSubCategory } = useContext(ShopContext);

  // copy the "get this" object to have another category
  const navigation = {
    categories: [
      // get this
      {
        id: "View Collections",
        name: "View Collections",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/04-bags-color-01.jpg?v=1699508089&width=535",
            imageAlt: "Comfortable bag good for office and school",
          },
          {
            name: "Denim Comfort Fit",
            href: "#",
            imageSrc:
              "https://digital-theme-minimalist.myshopify.com/cdn/shop/files/07-straps.jpg?v=1699354960&width=535",
            imageAlt: "Comfortable, and stylish apple Iwatch Strap",
          },
        ],
        sections: [
          {
            id: "watch straps",
            name: <span class="material-symbols-outlined">watch</span>,
            items: [{ name: "Watch Straps", href: "#" }],
            description:
              "Durable silicone or leather watch straps, a stylish accessory choice.",
          },
          {
            id: "laptop bags",
            name: <span class="material-symbols-outlined">enterprise</span>,
            items: [{ name: "Laptop bags", href: "#" }],
            description:
              "Chic laptop bags: on-the-go protection, padded, stylish",
          },
          {
            id: "stands",
            name: (
              <span class="material-symbols-outlined">desktop_windows</span>
            ),
            items: [{ name: "Stands", href: "#" }],
            description:
              "Hands-free, adjustable for comfortable device viewing and interaction",
          },
          {
            id: "cases",
            name: <span class="material-symbols-outlined">cases</span>,
            items: [{ name: "Cases", href: "#" }],
            description:
              "Wear-resistant cases in diverse materials, designs for personalized style. ",
          },
          {
            id: "phone card holders",
            name: <span class="material-symbols-outlined">wallet</span>,
            items: [{ name: "Phone Card Holders", href: "#" }],
            description:
              "Slim, secure phone card holder for conveninet on-the-go storage. ",
          },
          {
            id: "mouse pads",
            name: <span class="material-symbols-outlined">touchpad_mouse</span>,
            items: [{ name: "Mouse Pads", href: "#" }],
            description:
              "Ulta-smooth, ergonomic premium mouse pads for superiors comfort",
          },
        ],
      },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleViewCarts = () => {
    setOpenModal(true);
  };

  const MobileMenu = () => {
    return (
      <>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed top-0 left-0 w-full z-40"
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
                                className="font-medium text-custom "
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-3 flex flex-col space-y-6"
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
                        to="/signIn"
                        className="-m-2 block p-2 font-medium text-gray-300"
                      >
                        Sign in
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link
                        to="/signUp"
                        className="-m-2 block p-2 font-medium text-gray-300"
                      >
                        Create account
                      </Link>
                    </div>
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
      <div className="ml-7 flex">
        <Link to="/">
          <span className="sr-only">Your Company</span>
          <img className="w-16" src="/logo.png" alt="Digi-Mart" />
        </Link>
      </div>
    );
  };

  const calculateCartQuantities = () => {
    let cartQuantities = 0;
    cart.forEach((item) => {
      cartQuantities += item.qty;
    });
    return cartQuantities;
  };

  const FlyOutMenu = () => {
    return (
      <>
        <ShoppingCart openModal={openModal} setOpenModal={setOpenModal} />
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
          <div className="flex h-full space-x-8">
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
                          "relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-medium transition-colors duration-200 ease-out"
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

                        <div className="relative bg-custom z-50">
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
                                      className="mt-6 block font-medium text-custom"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </Link>
                                    <p
                                      aria-hidden="true"
                                      className="mt-1 text-first"
                                    >
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <div className="w-12">
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-custom"
                                      >
                                        {section.name}
                                      </p>
                                    </div>

                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <Link
                                            to="/shop"
                                            onClick={() => {
                                              handleFilterSubCategory(
                                                item.name
                                              );
                                            }}
                                            className="text-custom hover:text-gray-300"
                                          >
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                    <p className="text-first">
                                      {section.description}
                                    </p>
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
              to="/signIn"
              className="text-sm font-medium text-custom hover:text-gray-300"
            >
              Sign in
            </Link>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <Link
              to="/signUp"
              className="text-sm font-medium text-custom hover:text-gray-300"
            >
              Create account
            </Link>
          </div>

          {/* Search */}
          <div className="flex lg:ml-6">
            <SearchProduct />
          </div>
          <span
            className="h-6 w-px bg-gray-200 block lg:hidden mr-4 lg:mr-0"
            aria-hidden="true"
          />
          {/* Cart */}
          <div className="flow-root lg:ml-6">
            <Link href="#" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
                onClick={handleViewCarts}
              />
              <span className="ml-2 text-sm font-medium text-custom">
                {calculateCartQuantities()}
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
            <div className="flex h-16 items-center py-8">
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
