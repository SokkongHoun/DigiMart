import React, { Fragment, useContext, useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { SearchProduct } from "./SearchProduct.jsx";
import { CartContext } from "../contexts/CartProvider.jsx";
import { UserAuth } from "../auth/AuthContext.jsx";
import { ShopContext } from "../contexts/ShopProvider.jsx";
import { toast } from "react-toastify";
import { FirebaseData } from "../contexts/productData.jsx";
import ProductQuickViews from "./ProductQuickViews.jsx";

function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productData } = useContext(FirebaseData);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const data = productData;
  const shuffledData = shuffle(data);

  const selectedObjects = shuffledData.slice(0, 2);

  const handleProductView = (viewData) => {
    setSelectedProduct(viewData);
    setIsOpen(true);
  };

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { cartPrices, cart } = useContext(CartContext);
  const { handleFilterSubCategory } = useContext(ShopContext);
  const { userUI, logout, user } = UserAuth();
  const [cartQuantities, setCartQuantities] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  async function handleLogOut() {
    try {
      await logout();
      navigate("/");
      toast.info("log out successfully");
    } catch (error) {
      toast.error("unable to log out");
    }
  }

  const navigation = {
    categories: [
      // get this
      {
        id: "View Collections",
        name: "View Collections",
        featured: selectedObjects,
        sections: [
          {
            id: "watch straps",
            name: <span className="material-symbols-outlined">watch</span>,
            items: [{ name: "Watch Straps", href: "#" }],
            description:
              "Durable silicone or leather watch straps, a stylish accessory choice.",
          },
          {
            id: "laptop bags",
            name: <span className="material-symbols-outlined">enterprise</span>,
            items: [{ name: "Laptop bags", href: "#" }],
            description:
              "Chic laptop bags: on-the-go protection, padded, stylish",
          },
          {
            id: "stands",
            name: (
              <span className="material-symbols-outlined">desktop_windows</span>
            ),
            items: [{ name: "Stands", href: "#" }],
            description:
              "Hands-free, adjustable for comfortable device viewing and interaction",
          },
          {
            id: "cases",
            name: <span className="material-symbols-outlined">cases</span>,
            items: [{ name: "Cases", href: "#" }],
            description:
              "Wear-resistant cases in diverse materials, designs for personalized style. ",
          },
          {
            id: "phone card holders",
            name: <span className="material-symbols-outlined">wallet</span>,
            items: [{ name: "Phone Card Holders", href: "#" }],
            description:
              "Slim, secure phone card holder for conveninet on-the-go storage. ",
          },
          {
            id: "mouse pads",
            name: (
              <span className="material-symbols-outlined">touchpad_mouse</span>
            ),
            items: [{ name: "Mouse Pads", href: "#" }],
            description:
              "Ulta-smooth, ergonomic premium mouse pads for superiors comfort",
          },
        ],
      },
    ].map((value) => {
      return { ...value, keyId: crypto.randomUUID() };
    }),
  };

  useEffect(() => {
    const fetchData = async () => {
      const prices = await cartPrices;
      setCartSubtotal(prices.orderTotal);
    };

    return () => {
      fetchData();
    };
  }, [cartPrices]);

  useEffect(() => {
    let quan = 0;
    cart.forEach((val) => {
      quan += val.qty;
    });
    setCartQuantities(quan);
  }, [cart]);

  const HandleViewCart = () => {
    return (
      <>
        <div className="flex-none lg:ml-6">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartQuantities}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body bg-secondary rounded-xl">
                <span className="text-info">
                  SubTotal: ${cartSubtotal.toFixed(2)}
                </span>
                <div className="card-actions">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="btn bg-custom hover:bg-third btn-block text-custom border-none"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const HandleViewUsersAccount = () => {
    return (
      <div className="dropdown dropdown-bottom dropdown-end ml-4 lg:ml-8 mt-2">
        <div tabIndex={0} role="button">
          <span className="material-symbols-sharp">account_circle</span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow rounded-box w-56 bg-secondary"
        >
          <div className="text-left ml-4">
            <p className="my-2">{user.email}</p>
          </div>
          <hr className="mt-2 border-first" />
          <li>
            <Link to="/orderhistory">Order History</Link>
          </li>
          <li>
            <Link onClick={handleLogOut}>Sign out</Link>
          </li>
        </ul>
      </div>
    );
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
                            key={category.keyId}
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
                          key={category.keyId}
                          className="space-y-10 px-4 pb-8 pt-10"
                        >
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item, index) => (
                              <div
                                key={index}
                                className="group relative text-sm"
                                onClick={() => handleProductView(item)}
                              >
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src={item.imgSrc}
                                    className="object-cover object-center"
                                  />
                                </div>
                                <Link className="mt-6 block font-medium text-first text-sm truncate">
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                                <p aria-hidden="true" className="mt-1 text-sm">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                          {category.sections.map((section, index) => (
                            <div
                              className="flex items-center gap-5"
                              key={index}
                            >
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-medium text-custom "
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="flex flex-col space-y-6"
                              >
                                {section.items.map((item, index) => (
                                  <li key={index} className="flow-root">
                                    <Link
                                      to="/shop"
                                      onClick={() =>
                                        handleFilterSubCategory(item.name)
                                      }
                                      className="block p-2 text-gray-300 hover:underline"
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

                  {!userUI && (
                    <>
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
                    </>
                  )}
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

  const FlyOutMenu = () => {
    return (
      <>
        <ShoppingCart openModal={openModal} setOpenModal={setOpenModal} />
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
          <div className="flex h-full space-x-8">
            {navigation.categories.map((category) => (
              <Popover key={category.keyId} className="flex">
                {({ open }) => (
                  <>
                    <div className="relative flex">
                      <Popover.Button
                        className={classNames(
                          open
                            ? "border-blue-800 text-blue-500"
                            : " text-custom hover:text-gray-300",
                          "relative z-10 -mb-px flex items-center pt-px text-base font-medium transition-colors duration-200 ease-out"
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
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />

                        <div className="relative bg-custom z-50">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item, index) => (
                                  <div
                                    key={index}
                                    className="group relative text-base sm:text-sm"
                                    onClick={() => handleProductView(item)}
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src={item.imgSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <Link className="mt-6 block font-medium text-custom">
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
                                {category.sections.map((section, index) => (
                                  <div key={index}>
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
                                      {section.items.map((item, index) => (
                                        <li key={index} className="flex">
                                          <Link
                                            to="/shop"
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
            {!userUI && (
              <>
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
              </>
            )}
          </div>

          <div className="flex mr-4 lg:ml-6 mt-2">
            <SearchProduct />
          </div>
          {userUI && (
            <>
              <HandleViewCart />
              <span
                className="h-6 w-px bg-gray-200 block mr-4 lg:mr-0 ml-5"
                aria-hidden="true"
              />
              <HandleViewUsersAccount />
            </>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="bg-white sticky top-0 z-40">
      {selectedProduct && (
        <ProductQuickViews
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productData={selectedProduct}
        />
      )}
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
