import React from "react";
import { useSelector } from "react-redux";

const PlaceOrder = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalPrice);
  return (
    <form className="m-auto w-[80%] mt-12 flex justify-between 
    min-[690px]:flex-row max-[689px]:flex-col">
      <div className="flex flex-col w-3/5">
        <h1 className="text-2xl font-bold mb-3">Delivery Information</h1>
        <div className="flex gap-2 mb-2">
          <input className="border p-2 w-full" type="text" placeholder="First Name" />
          <input className="border p-2 w-full" type="text" placeholder="Last Name" />
        </div>
        <input className="border p-2 w-full mb-2" type="text" placeholder="Email Address" />
        <input className="border p-2 w-full mb-2" type="text" placeholder="Street" />
        <div className="flex gap-2 mb-2">
          <input className="border p-2 w-full" type="text" placeholder="City" />
          <input className="border p-2 w-full" type="text" placeholder="State" />
        </div>
        <div className="flex gap-2 mb-2">
          <input className="border p-2 w-full" type="text" placeholder="Zip Code" />
          <input className="border p-2 w-full" type="text" placeholder="Country" />
        </div>
        <input className="border p-2 w-full" type="text" placeholder="Phone" />
      </div>
      <div className="sm:w-2/6 max-[1024px]:w-full">
        <h1 className="text-2xl font-bold mb-3">Cart Totals</h1>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${cartTotalAmount}</p>
        </div>
        <hr className="h-[1px] my-4 bg-gray-500 border-none" />
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>${cartTotalAmount === 0 ? 0 : 5}</p>
        </div>
        <hr className="h-[1px] my-4 bg-gray-500 border-none" />
        <div className="flex justify-between">
          <p>Total</p>
          <p>${cartTotalAmount === 0 ? 0 : cartTotalAmount + 5}</p>
        </div>
        <hr className="h-[1px] my-4 bg-gray-500 border-none" />
        <button
          className="bg-orange-500 text-white mt-2 px-5 py-2 rounded-lg"
         
        >
          Proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
