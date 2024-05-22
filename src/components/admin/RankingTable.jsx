import { OrderHistoryContext } from "../../contexts/OrderHistoryContext";
import { useContext } from "react";

const RankingTable = () => {
  const { userOrderHistory } = useContext(OrderHistoryContext);
  console.log(userOrderHistory);

  return (
    <div className="overflow-x-auto p-8 rounded-2xl bg-secondary">
      Latest Ordered
      <hr className="border-neutral-500 my-3" />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Product</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-custom">
            <th>1</th>
            <td>Phone case</td>
            <td>12/3/2023</td>
            <td>230</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>1</th>
            <td>Phone case</td>
            <td>12/3/2023</td>
            <td>230</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>1</th>
            <td>Phone case</td>
            <td>12/3/2023</td>
            <td>230</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
