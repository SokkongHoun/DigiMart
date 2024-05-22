import { LineChart } from "@mui/x-charts/LineChart";
import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useState, useContext, useEffect } from "react";

const LineBoard = () => {
  const { userOrderHistory } = useContext(OrderHistoryContext);
  const [dateProductCount, setDateProductCount] = useState({});

  useEffect(() => {
    const groupedData = userOrderHistory.reduce((acc, val) => {
      const dateWithoutTime = val.datePlaced.split(",")[0].trim();

      if (!acc[dateWithoutTime]) {
        acc[dateWithoutTime] = 0;
      }

      val.products.forEach((product) => {
        acc[dateWithoutTime] += product.totalQuantities;
      });

      return acc;
    }, {});

    setDateProductCount(groupedData);
  }, [userOrderHistory]);

  const dates = Object.keys(dateProductCount).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  const productCounts = dates.map((date) => dateProductCount[date]);

  const formattedDates = dates.map((date) => {
    const options = { day: "2-digit", month: "short" };
    return new Date(date).toLocaleDateString("en-US", options);
  });
  return (
    <>
      <LineChart
        xAxis={[{ data: formattedDates, scaleType: "band" }]}
        series={[
          {
            data: productCounts,
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
export default LineBoard;
