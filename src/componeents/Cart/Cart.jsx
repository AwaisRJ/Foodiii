import React from "react";
import CartTable from "./CartTable";

const Cart = () => {
    
  return (
    <div>
      <CartTable />
      <div>
        <div>
            <h1>Cart Totals</h1>

            <button className="bg-orange-500 text-white px-2 py-3 rounded-lg">Proceed to CheckOut</button>
        </div>
        <div>
          <p>If you have a promo code enter it here.</p>
          <div className="flex">
            <input type="text" placeholder="promo code" />
            <button className="bg-black text-white px-2 py-3 rounded-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
