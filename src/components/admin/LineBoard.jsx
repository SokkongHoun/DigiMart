import { LineChart } from "@mui/x-charts/LineChart";
import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useState, useContext, useEffect } from "react";
import { BtnLoadingAnimation } from "../LoadingAnimation";

const style = {
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
};

const LineBoard = () => {
  const { userOrderHistory } = useContext(OrderHistoryContext);
  const [totalSaleToday, setTotalSaleToday] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(userOrderHistory);

  useEffect(() => {
    const groupedData = userOrderHistory.reduce((acc, val) => {
      const dateWithoutTime = val.datePlaced.split(",")[0].trim();
      if (!acc[dateWithoutTime]) {
        acc[dateWithoutTime] = 0;
      }

      acc[dateWithoutTime] += val.totalPackagePrice;
      setIsLoading(false);
      return acc;
    }, {});

    setTotalSaleToday(groupedData);
  }, [userOrderHistory]);

  console.log(totalSaleToday);

  const dates = Object.keys(totalSaleToday).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  const totalPrices = dates.map((date) => totalSaleToday[date]);
  const totalPricesFormatted = totalPrices.map((price) =>
    Number(price.toFixed(2))
  );

  const formattedDates = dates.map((date) => {
    const options = { day: "2-digit", month: "short" };
    return new Date(date).toLocaleDateString("en-US", options);
  });

  const pData = totalPricesFormatted;
  const xLabels = formattedDates;
  return isLoading ? (
    <BtnLoadingAnimation />
  ) : (
    <LineChart
      series={[{ data: pData, yAxisKey: "leftAxisId" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
      yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
      rightAxis="rightAxisId"
      grid={{ vertical: true, horizontal: true }}
      sx={style}
    />
  );
};
export default LineBoard;
