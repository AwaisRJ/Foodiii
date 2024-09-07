import React from "react";
import { food_list } from "../../assets/assets";
import { useSelector } from "react-redux";
const CartTable = () => {
  const quantity = useSelector((state) => state.quantity.quantity);
  return (
    <div>
    
      <div className="font-bold text-3xl m-auto px-5">Under Maintenance</div>
    </div>
  );
};

export default CartTable;
