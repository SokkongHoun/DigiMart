import { LineChart } from "@mui/x-charts/LineChart";

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
export default LineBoard;
