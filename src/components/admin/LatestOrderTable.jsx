import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useContext, useEffect, useState } from "react";
import { BtnLoadingAnimation } from "../LoadingAnimation";

const LatestOrderTable = () => {
  const { userOrderHistory } = useContext(OrderHistoryContext);
  const [isLoading, setIsLoading] = useState(true);
  const [orderLists, setOrderLists] = useState(null);

  useEffect(() => {
    let sortedLatestOrder = userOrderHistory.sort((a, b) => {
      const dateA = new Date(a.datePlaced);
      const dateB = new Date(b.datePlaced);

      return dateB - dateA;
    });
    sortedLatestOrder = sortedLatestOrder.slice(0, 3);
    setOrderLists(sortedLatestOrder);
    setIsLoading(false);
  }, [userOrderHistory]);

  return (
    <div className="overflow-x-auto p-8 rounded-2xl bg-secondary">
      <h1 className="font-semibold text-xl">Latest Ordered</h1>{" "}
      <hr className="border-neutral-500 my-3" />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {isLoading ? (
            <BtnLoadingAnimation />
          ) : (
            orderLists.map((money, index) => {
              return (
                <tr
                  key={money.orderNumber}
                  className={index === 0 ? "bg-custom" : ""}
                >
                  <th>{money.orderNumber}</th>
                  <td>{money.datePlaced}</td>
                  <td>{money.totalPackagePrice}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrderTable;
