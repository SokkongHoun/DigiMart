import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useContext } from "react";

const StatChart = () => {
  const { userOrderHistory } = useContext(OrderHistoryContext);

  let totalSales = 0;
  let totalOrdered = 0;
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleString("default", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });

  let newOrdered;

  userOrderHistory.forEach((value) => {
    totalSales += value.totalPackagePrice;

    totalOrdered += value.products.length;

    if (value.datePlaced === formattedDate) {
      newOrdered = value.products.length;
    }
  });

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow w-full h-full bg-secondary">
      <div className="stat">
        <div className="stat-figure bg-green-500 bg-opacity-50 p-3 rounded-lg border border-green-300">
          <span className="material-symbols-outlined text-green-200">
            attach_money
          </span>
        </div>
        <div className="stat-title ">Total Sales</div>
        <div className="stat-value text-custom">${Math.ceil(totalSales)}</div>
      </div>

      <div className="stat">
        <div className="stat-figure bg-neutral-500 bg-opacity-50 p-3 rounded-lg border border-neutral-500">
          <span className="material-symbols-outlined text-custom">
            package_2
          </span>
        </div>
        <div className="stat-title">Total Ordered</div>
        <div className="stat-value text-custom">{totalOrdered}</div>
        <div className="stat-desc text-custom">
          {newOrdered ? `${newOrdered} news ordered today` : "No order today"}
        </div>
      </div>
    </div>
  );
};

export default StatChart;
