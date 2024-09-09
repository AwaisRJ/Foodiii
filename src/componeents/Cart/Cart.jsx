import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

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
              <p
                className="cursor-pointer"
                onClick={() =>
                  dispatch(cartAction.removeItemsFromCart(item.id))
                }
              >
                x
              </p>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="w-2/5">
          <h1 className="text-2xl font-bold mb-3">Cart Totals</h1>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${100}</p>
          </div>
          <hr className="h-[1px] my-4 bg-gray-500 border-none" />
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>$5</p>
          </div>
          <hr className="h-[1px] my-4 bg-gray-500 border-none" />
          <div className="flex justify-between">
            <p>Total</p>
            <p>${105}</p>
          </div>
          <button className="bg-orange-500 text-white mt-5 px-5 py-2 rounded-lg">
            Proceed to CheckOut
          </button>
        </div>
        <div className=" mt-16">
          <p>If you have a promo code enter it here.</p>
          <div className="flex mt-3">
            <input className="bg-gray-200 border outline-none pl-2 w-80" type="text" placeholder="promo code" />
            <button className="bg-black text-white px-12 py-2 rounded-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
