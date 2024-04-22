import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
          height={300}
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

  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <LineBoard />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-black text-base-content">
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
