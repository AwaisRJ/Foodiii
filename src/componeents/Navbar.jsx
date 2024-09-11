import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
import { Link, useNavigate } from "react-router-dom";
import { signInAction } from "../store/login-slice";
function Navbar() {
  const cartTotalAmount = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const navigate = useNavigate();
  const toggleHandler = () => {
    dispatch(cartAction.toggle());
   {cartIsVisible===false ? navigate('/cart'):navigate('/') }
  };
  const SignUpHandler = () => {
    dispatch(signInAction.SignInToggle());
  };
  const [menu, setMenu] = useState("home");
  return (
    <div className="m-auto w-[80%]">
      <header className="flex flex-1 justify-between items-center py-5">
        <div className="text-orange-500 text-2xl font-bold">
          <h1>Tomato.</h1>
        </div>
        <div>
          <ul className="md:flex lg:gap-7 md:gap-2 sm:hidden max-sm:hidden cursor-pointer">
            <li
              onClick={() => {
                setMenu("home");
              }}
              className={menu === "home" ? "active:pb-1 border-b-2" : ""}
            >
              <a href="/">Home</a>
            </li>
            <li
              onClick={() => {
                setMenu("menu");
              }}
              className={menu === "menu" ? "active:pb-1 border-b-2" : ""}
            >
              <a href="#menu">Menu</a>
            </li>
            <li
              onClick={() => {
                setMenu("mobile-app");
              }}
              className={menu === "mobile-app" ? "active:pb-1 border-b-2" : ""}
            >
             <a href="#app-download">Mobile App</a>
            </li>
            <li
              onClick={() => {
                setMenu("contact-us");
              }}
              className={menu === "contact-us" ? "active:pb-1 border-b-2" : ""}
            >
             <a href="#app-download">Contact Us</a> 
            </li>
          </ul>
        </div>
        <div className="flex lg:gap-10 md:gap-4 sm:gap-4 max-sm:gap-6 justify-center items-center cursor-pointer">
          <img className="" src={assets.search_icon} alt="Search Icon" />
          <div className="relative flex">
            <img
              onClick={toggleHandler}
              className=""
              src={assets.basket_icon}
              alt="Cart"
            />
            {cartTotalAmount === 0 ? (
              ""
            ) : (
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            )}
          </div>
          <motion.button
            className="rounded-full border-2 py-2 px-4"
            onClick={SignUpHandler}
            whileHover={{
              scale: 1.1,
            }}
          >
            Sign In
          </motion.button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
