import React from "react";
import { Link } from "react-router-dom";
import LineBoard from "../../components/admin/LineBoard";
import StatChart from "../../components/admin/StatChart";
import PieActiveArc from "../../components/admin/PieChart";
import RankingTable from "../../components/admin/RankingTable";

const Dashboard = () => {
  // the button to collapse and open this sidebar is in adminNav
  return (
    <div>
      <div className="drawer 2xl:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col gap-5 m-8">
          <div>
            <h1 className="text-3xl font-semibold">2024 All Time Sales</h1>
          </div>
          {/* Page content here */}

          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-5">
            <div className="col-span-1 bg-secondary rounded-2xl">
              <LineBoard />
            </div>
            <div className="col-span-1 flex flex-col justify-between h-full">
              <div className="grid grid-cols-[1fr,2fr] lg:grid-cols-1 gap-6 h-full">
                <div className="h-full">
                  <StatChart />
                </div>
                <div className="bg-secondary rounded-2xl p-5">
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
