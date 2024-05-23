import { CookieSharp } from "@mui/icons-material";
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

  let newOrdered = 0;

  userOrderHistory.forEach((value) => {
    totalSales += value.totalPackagePrice;
    totalOrdered += value.products.length;

    let datePlaced = new Date(value.datePlaced);

    let formattedDatePlaced = datePlaced.toLocaleString("default", {
      month: "short",
      year: "numeric",
      day: "2-digit",
    });

    if (formattedDatePlaced === formattedDate) {
      newOrdered += value.products.length;
    }
  });

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow bg-secondary h-full w-full">
      <div className="stat">
        <div className="stat-figure bg-green-500 bg-opacity-50 p-2 rounded-lg border border-green-300">
          <span className="material-symbols-outlined text-green-200">
            attach_money
          </span>
        </div>
        <div className="stat-title">Total Sales</div>
        <div className="stat-value text-custom lg:text-3xl">
          ${Math.ceil(totalSales).toLocaleString()}
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure bg-neutral-500 bg-opacity-50 p-2 rounded-lg border border-neutral-500">
          <span className="material-symbols-outlined text-custom">
            package_2
          </span>
        </div>
        <div className="stat-title">Total Ordered</div>
        <div className="stat-value text-custom lg:text-3xl">{totalOrdered}</div>
        <div className="stat-desc text-custom">
          {`${newOrdered} news ordered today`}
        </div>
      </div>
    </div>
  );
};

export default StatChart;
