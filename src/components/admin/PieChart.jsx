import { PieChart } from "@mui/x-charts/PieChart";
import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useContext, useState, useEffect } from "react";
import { BtnLoadingAnimation } from "../LoadingAnimation";

function PieActiveArc() {
  const { userOrderHistory } = useContext(OrderHistoryContext);
  const [isLoading, setIsLoading] = useState(true);
  const [productQuantitiesArray, setProductQuantitiesArray] = useState([]);

  useEffect(() => {
    const processData = () => {
      const productQuantities = {};

      userOrderHistory.forEach((order) => {
        order.products.forEach((product) => {
          const { id, name, totalQuantities } = product;
          if (productQuantities[id]) {
            productQuantities[id].totalQuantities += totalQuantities;
          } else {
            productQuantities[id] = { id, name, totalQuantities };
          }
        });
      });

      const sortedProducts = Object.values(productQuantities).sort(
        (a, b) => b.totalQuantities - a.totalQuantities
      );
      setProductQuantitiesArray(sortedProducts);
    };

    if (userOrderHistory && userOrderHistory.length > 0) {
      processData();
    }
    setIsLoading(false);
  }, [userOrderHistory]);

  const pieData = productQuantitiesArray.slice(0, 3).map((product, index) => ({
    id: index,
    value: product.totalQuantities,
    color: index === 0 ? "#00a9a5" : index === 1 ? "#5aaa95" : "#00916e",
    name: product.name,
  }));
  return (
    <>
      {isLoading ? (
        <BtnLoadingAnimation />
      ) : (
        <div className="grid grid-cols-[1fr] items-center justify-center">
          <div>
            <h1 className="text-xl font-semibold">Top Products</h1>
          </div>
          <div className="flex ml-20">
            <PieChart
              series={[
                {
                  data: pieData, // Use pieData instead of data
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
              height={200}
              width={280}
            />
          </div>
          <div className="grid grid-cols-2">
            {pieData.map((value, index) => {
              return (
                <div key={index} className="flex items-center m-1">
                  <span
                    style={{
                      backgroundColor: value.color,
                      color: value.color,
                    }}
                    className="inline-block mr-2 h-4 w-4 rounded-full"
                  ></span>
                  <p className="text-sm text-nowrap">{value.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default PieActiveArc;
