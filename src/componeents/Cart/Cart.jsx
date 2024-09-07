import React from "react";
import CartTable from "./CartTable";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="m-auto w-[80%]">
      <div className="mb-14">
        <div className="grid grid-cols-6 col-span-6">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {cartItems.map((item) => (
          <>
            <hr className="h-[1px] my-4 bg-gray-500 border-none" />
            <div className="grid grid-cols-6 col-span-6 items-center">
              <img className="size-14" src={item.image} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>${item.price * item.quantity}</p>
              <p>x</p>
            </div>
          </>
        ))}
      </div>
      <div>
        <div>
          <h1>Cart Totals</h1>

          <button className="bg-orange-500 text-white px-2 py-3 rounded-lg">
            Proceed to CheckOut
          </button>
        </div>
        <div>
          <p>If you have a promo code enter it here.</p>
          <div className="flex">
            <input type="text" placeholder="promo code" />
            <button className="bg-black text-white px-2 py-3 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
