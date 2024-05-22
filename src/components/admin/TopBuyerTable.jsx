import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useContext, useEffect, useState } from "react";
import { BtnLoadingAnimation } from "../LoadingAnimation";

const TopBuyerTable = () => {
  const { userOrderHistory } = useContext(OrderHistoryContext);
  const [isLoading, setIsLoading] = useState(true);
  const [topBuyers, setTopBuyers] = useState(null);

  useEffect(() => {
    const emailMap = new Map();

    // Step 1: Accumulate totalPackagePrice for each email
    userOrderHistory.forEach((order) => {
      if (order.email) {
        const email = order.email;
        const totalPackagePrice = order.totalPackagePrice;

        if (emailMap.has(email)) {
          emailMap.set(email, emailMap.get(email) + totalPackagePrice);
        } else {
          emailMap.set(email, totalPackagePrice);
        }
      }
    });

    // Step 2: Convert map to array and sort by totalPackagePrice in descending order
    const sortedTopSpenders = Array.from(emailMap.entries())
      .map(([email, totalPackagePrice]) => ({ email, totalPackagePrice }))
      .sort((a, b) => b.totalPackagePrice - a.totalPackagePrice);

    // Step 3: Take the top three total package prices
    const topThreeSpenders = sortedTopSpenders.slice(0, 3);

    setTopBuyers(topThreeSpenders);
    setIsLoading(false);
  }, [userOrderHistory]);

  return (
    <div className="overflow-x-auto p-8 rounded-2xl bg-secondary">
      <h1 className="font-semibold text-xl">Top spenders</h1>
      <hr className="border-neutral-500 my-3" />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Email</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <BtnLoadingAnimation />
          ) : (
            topBuyers.map((money, index) => {
              return (
                <tr
                  key={money.orderNumber}
                  className={index === 0 ? "bg-custom" : ""}
                >
                  <th>{money.email}</th>
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

export default TopBuyerTable;
