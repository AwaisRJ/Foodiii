import React from "react";
import { food_list } from "../../assets/assets";
const CartTable = () => {
  return (
    <div>
      <div>
        <table className="table-auto ">
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                {food_list.map((item, index) => {
                    return(
                    <div>
                    <td>{item.image}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>4</td>
                    <td>6</td>
                    <td>Remove</td>
                    </div>)
                } )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
