import React, { useContext } from "react";
import { FirebaseData } from "../../contexts/productData";

const ProductTable = () => {
  const { productData } = useContext(FirebaseData);

  console.log(productData);

  const Category = () => {
    return (
      <details className="dropdown">
        <summary className="cursor-pointer m-1 y text-white">Category</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-secondary rounded-box w-52 text-white">
          <li>
            <a>Stand</a>
          </li>
          <li>
            <a>Watch Straps</a>
          </li>
          <li>
            <a>Mouse Pads</a>
          </li>
          <li>
            <a>Laptop bags</a>
          </li>
          <li>
            <a>Phone Card Holders</a>
          </li>
        </ul>
      </details>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-white">Id</th>
            <th className="text-white">Name</th>
            <th>
              <Category />
            </th>
            <th className="text-white cursor-pointer">
              Price{" "}
              <span class="material-symbols-outlined text-sm">swap_vert</span>
            </th>
            <th className="text-white cursor-pointer">
              Rating{" "}
              <span class="material-symbols-outlined text-sm">swap_vert</span>
            </th>
            <th className="text-white cursor-pointer">
              Reviews{" "}
              <span class="material-symbols-outlined text-sm">swap_vert</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {productData.map((value, index) => {
            return (
              <tr key={index} className="hover">
                <td>
                  <input type="checkbox" className="checkbox checkbox-accent" />
                </td>
                <th>{value.id}</th>
                <td>{value.name}</td>
                <td>{value.category}</td>
                <td>{value.price.toFixed(2)}</td>
                <td>{value.rating}</td>
                <td>{value.reviewCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
