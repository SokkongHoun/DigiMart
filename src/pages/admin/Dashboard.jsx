import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Link } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
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
              stroke: "#000000", // Black color for grid lines
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
      <div className="stats shadow w-full">
        <div className="stat w-full">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat w-full">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    );
  };

  /* Top 3 categories, each category represent the top product from that category*/
  const PieChartData = () => {
    const data = [
      { id: 0, value: 10, label: "series A" },
      { id: 1, value: 15, label: "series B" },
      { id: 2, value: 20, label: "series C" },
    ];

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
      />
    );
  };

  /* Top 3 buyers table */
  /* Top 3 most sales product of all time table */

  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content grid grid-cols-[800px,1fr] gap-1 h-2/3">
          {/* Page content here */}
          <div className="col-span-1 rounded-md border border-neutral-500 m-1">
            <LineBoard />
          </div>
          <div className="col-span-1 border-neutral-500 flex flex-col justify-between h-full m-1">
            <div className="border rounded-md">
              <StatChart />
            </div>
            <div className="border rounded-md flex-grow flex-shrink-0 flex items-center justify-center mt-3">
              <PieChartData />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-custom text-base-content border-r border-neutral-600">
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
