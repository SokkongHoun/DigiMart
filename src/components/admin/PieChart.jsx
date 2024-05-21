import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  {
    id: 0,
    value: 10,
    label: "Phone case",
    color: "#bfdbf7",
  },
  {
    id: 1,
    value: 15,
    label: "Business Bag",
    color: "#1f7a8c",
  },
  {
    id: 2,
    value: 20,
    label: "Laptop bag",
    color: "#022b3a",
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

export default PieActiveArc;
