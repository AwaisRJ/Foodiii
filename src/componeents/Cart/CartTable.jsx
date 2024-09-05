import React from "react";
import { food_list } from "../../assets/assets";
const CartTable = () => {
  return (
      <div>
        <div>
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list.map((item, index) => {
          if(item._id > 0){
          return (
            <div>
              {item.name}
            </div>
          ); }
        })}
      </div>
  );
};

export default CartTable;
