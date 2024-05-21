import React from "react";
import { Link } from "react-router-dom";
import LineBoard from "../../components/admin/LineBoard";
import StatChart from "../../components/admin/StatChart";
import PieActiveArc from "../../components/admin/PieChart";
import RankingTable from "../../components/admin/RankingTable";

const Dashboard = () => {
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
