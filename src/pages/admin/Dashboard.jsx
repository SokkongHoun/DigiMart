import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Link } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";

const Dashboard = () => {
  /* Today's sale with top most sell product */
  const LineBoard = () => {
    return (
      <>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
          height={400}
          sx={{
            // Existing styles for xAxis and yAxis
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "#FFFFFF", // White color for xAxis line
              strokeWidth: 0.4,
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "#FFFFFF", // White color for yAxis line
              strokeWidth: 0.4,
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              fill: "#FFFFFF", // White color for xAxis labels
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              fill: "#FFFFFF", // White color for yAxis labels
            },

            // Additional style for grid lines
            "& .MuiChartsGrid-line": {
              stroke: "#808080", // Black color for grid lines
              strokeWidth: 0.4,
            },
            // Style for tick lines
            "& .MuiChartsAxis-tick": {
              stroke: "#808080", // Gray color for tick lines
              strokeWidth: 0.4,
            },
          }}
        />
      </>
    );
  };

  /* Total sales */

  const StatChart = () => {
    return (
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full h-full bg-secondary">
        <div className="stat">
          <div className="stat-figure bg-green-500 bg-opacity-50 p-3 rounded-lg border border-green-500">
            <span className="material-symbols-outlined text-green-500">
              arrow_upward
            </span>
          </div>
          <div className="stat-title ">Total Sales</div>
          <div className="stat-value text-custom">25,000</div>
          <div className="stat-desc text-custom">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure bg-neutral-500 bg-opacity-50 p-3 rounded-lg border border-neutral-500">
            <span className="material-symbols-outlined text-custom">
              package_2
            </span>
          </div>
          <div className="stat-title">Total Ordered</div>
          <div className="stat-value text-custom">3600</div>
          <div className="stat-desc text-custom">20 news ordered today</div>
        </div>
      </div>
    );
  };

  /* Top 3 categories, each category represent the top product from that category*/
  const data = [
    {
      id: 0,
      value: 10,
      label: "Phone case",
      color: "#00a9a5",
    },
    {
      id: 1,
      value: 15,
      label: "Business Bag",
      color: "#0b5351",
    },
    {
      id: 2,
      value: 20,
      label: "Laptop bag",
      color: "#092327",
    },
  ];

  function PieActiveArc() {
    return (
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
        labelStyle={{
          fill: "white",
          fontSize: "10px",
        }}
      />
    );
  }

  const RankingTable = () => {
    return (
      <div className="overflow-x-auto p-8 rounded-2xl bg-secondary">
        Latest Ordered
        <hr className="border-neutral-500 my-3" />
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Product</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-custom">
              <th>1</th>
              <td>Phone case</td>
              <td>12/3/2023</td>
              <td>230</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>1</th>
              <td>Phone case</td>
              <td>12/3/2023</td>
              <td>230</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>1</th>
              <td>Phone case</td>
              <td>12/3/2023</td>
              <td>230</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const Datepicker = () => {
    return (
      <input
        type="date"
        className="border-none outline-none bg-transparent cursor-pointer"
      />
    );
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col gap-5 m-8 ">
          <div>
            <h1 className="text-3xl font-semibold">Report</h1>
            <div className="flex gap-5 items-center text-first my-3">
              <p>Date :</p>
              <Datepicker />
            </div>
          </div>
          {/* Page content here */}

          <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-5">
            <div className="col-span-1 bg-secondary rounded-2xl">
              <LineBoard />
            </div>
            <div className="col-span-1 flex flex-col justify-between h-full">
              <div className="grid grid-cols-[1fr,2fr] xl:grid-cols-1 gap-6 h-full">
                <div className="h-full">
                  <StatChart />
                </div>
                <div className="flex-grow flex-shrink-0 flex items-center justify-center rounded-2xl bg-secondary h-full">
                  <PieActiveArc />
                </div>
              </div>
            </div>
          </div>
          <div>
            <RankingTable />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-secondary text-base-content border-r border-neutral-600">
            {/* Sidebar content here */}
            <li>
              <Link to="/" className="justify-between text-custom">
                Dashboard
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/productdashboard" className="text-custom">
                Product Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
