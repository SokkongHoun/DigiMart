import { PieChart } from "@mui/x-charts/PieChart";
import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useContext } from "react";

function PieActiveArc() {
  const { userOrderHistory } = useContext(OrderHistoryContext);
  const productCountMap = new Map();

  userOrderHistory.forEach((value) => {
    value.products.forEach((product) => {
      const productId = product.id;
      const productQuantity = product.totalQuantities;

      if (productCountMap.has(productId)) {
        const productInfo = productCountMap.get(productId);
        productInfo.count += 1;
        productInfo.totalQuantities += productQuantity;
        productCountMap.set(productId, productInfo);
      } else {
        productCountMap.set(productId, {
          product: product,
          count: 1,
          totalQuantities: productQuantity,
        });
      }
    });
  });
  let firstMax = { count: 0, product: null, totalQuantities: 0 };
  let secondMax = { count: 0, product: null, totalQuantities: 0 };
  let thirdMax = { count: 0, product: null, totalQuantities: 0 };

  productCountMap.forEach((productInfo) => {
    if (productInfo.count > firstMax.count) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = {
        count: productInfo.count,
        product: productInfo.product,
        totalQuantities: productInfo.totalQuantities,
      };
    } else if (productInfo.count > secondMax.count) {
      thirdMax = secondMax;
      secondMax = {
        count: productInfo.count,
        product: productInfo.product,
        totalQuantities: productInfo.totalQuantities,
      };
    } else if (productInfo.count > thirdMax.count) {
      thirdMax = {
        count: productInfo.count,
        product: productInfo.product,
        totalQuantities: productInfo.totalQuantities,
      };
    }
  });

  const data = [
    {
      id: 0,
      value: firstMax.totalQuantities,
      color: "#00a9a5",
    },
    {
      id: 1,
      value: secondMax.totalQuantities,
      color: "#5aaa95",
    },
    {
      id: 2,
      value: thirdMax.totalQuantities,
      color: "#00916e",
    },
  ];
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
