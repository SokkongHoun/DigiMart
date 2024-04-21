import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Dashboard = () => {
  return (
    <div className="bg-white mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-screen-2xl">
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
      />
    </div>
  );
};

export default Dashboard;
