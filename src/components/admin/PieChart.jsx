import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  {
    id: 0,
    value: 10,
    color: "#00a9a5",
  },
  {
    id: 1,
    value: 15,
    color: "#5aaa95",
  },
  {
    id: 2,
    value: 20,
    color: "#00916e",
  },
];

function PieActiveArc() {
  return (
    <>
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
      <div className="w-52">
        <div className="flex mb-2">
          <span
            style={{
              backgroundColor: data[0].color,
              color: data[0].color,
              display: "inline-block",
              marginRight: "10px",
              height: "20px",
              borderRadius: "10px",
              width: "20px",
            }}
          ></span>
          <p>Phone bag</p>
        </div>
        <div className="flex mb-2">
          <span
            style={{
              backgroundColor: data[1].color,
              color: data[1].color,
              display: "inline-block",
              marginRight: "10px",
              height: "20px",
              borderRadius: "10px",
              width: "20px",
            }}
          ></span>
          <p>Laptop Case</p>
        </div>
        <div className="flex mb-2">
          <span
            style={{
              backgroundColor: data[2].color,
              color: data[2].color,
              display: "inline-block",
              marginRight: "10px",
              height: "20px",
              borderRadius: "10px",
              width: "20px",
            }}
          ></span>
          <p>Watch Strap</p>
        </div>
      </div>
    </>
  );
}

export default PieActiveArc;
