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

export default StatChart;
