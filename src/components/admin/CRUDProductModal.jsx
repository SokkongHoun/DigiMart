import React, { useContext, useState } from "react";
import { FirebaseData } from "../../contexts/productData";
import ReactPaginate from "react-paginate";
import AddProductModal from "./AddProductModal";
import PreviewProductModal from "./PreviewProductModal";
import EditProductModal from "./EditProductModal";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SearchInput = () => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input type="text" className="grow" placeholder="Search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

const FilterDropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-transparent hover:bg-third hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
            clipRule="evenodd"
          />
        </svg>
        Filter
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-third"
      >
        <li>
          <a>Stands</a>
        </li>
        <li>
          <a>Phone Card Holders</a>
        </li>
        <li>
          <a>Cases</a>
        </li>
        <li>
          <a>Watch Straps</a>
        </li>
        <li>
          <a>Laptop bags</a>
        </li>
        <li>
          <a>Mouse Pads</a>
        </li>
      </ul>
    </div>
  );
};

const DisplayProductInfo = ({ currentItems }) => {
  return currentItems.map((value, index) => {
    return (
      <tr key={index} className="border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {value.name}
        </th>
        <td className="px-4 py-3 text-nowrap">{value.category}</td>
        <td className="px-4 py-3 text-custom">${value.price.toFixed(2)}</td>
        <td className="px-4 py-3 max-w-[12rem] truncate">
          What is a product description? A product description describes a
          product.
        </td>
        <td className="px-4 py-3 text-custom">{value.rating.toFixed(1)}</td>
        <td className="px-4 py-3 text-custom">{value.reviewCount}</td>
        <td className="px-4 py-3 flex items-center justify-end">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>...</Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-custom shadow-lg">
                <div className="py-2 px-2 ">
                  <Menu.Item>
                    <PreviewProductModal />
                  </Menu.Item>
                  <Menu.Item>
                    <EditProductModal />
                  </Menu.Item>
                  <Menu.Item className="flex items-center py-1 hover:bg-secondary">
                    <div className="w-full cursor-pointer pl-2 rounded-md text-red-600 ">
                      <span className="material-symbols-outlined text-base mr-2">
                        delete
                      </span>
                      Delete
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </td>
      </tr>
    );
  });
};

const CRUDProductModal = () => {
  const { productData } = useContext(FirebaseData);
  let itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="p-3 sm:p-5">
        <div className="mx-auto px-4 lg:px-5">
          <div className="bg-secondary relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <SearchInput />
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <AddProductModal />
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <FilterDropdown />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-custom dark:text-first">
                <thead className="text-xs text-neutral-400 uppercase bg-third">
                  <tr>
                    <th scope="col" className="px-4 py-4">
                      Product name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Rating
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Reviews
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <DisplayProductInfo currentItems={currentItems} />
                </tbody>
              </table>
            </div>
            <ReactPaginate
              className="w-full flex grow gap-10 justify-center px-3 py-3 font-bold text-custom bg-third"
              breakLabel="..."
              nextLabel="next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CRUDProductModal;
