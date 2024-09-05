import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";
import { Link } from "react-router-dom";
import { signInAction } from "../store/login-slice";
function Navbar() {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(cartAction.toggle());
  };
  const SignUpHandler = () => {
    dispatch(signInAction.SignInToggle());
  }
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
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              setMenu("menu");
            }}
            className={menu === "menu" ? "active:pb-1 border-b-2" : ""}
          >
            <Link to="/menu">Menu</Link>
          </li>
          <li
            onClick={() => {
              setMenu("mobile-app");
            }}
            className={menu === "mobile-app" ? "active:pb-1 border-b-2" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => {
              setMenu("contact-us");
            }}
            className={menu === "contact-us" ? "active:pb-1 border-b-2" : ""}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <div className="flex lg:gap-10 md:gap-4 sm:gap-4 max-sm:gap-6 justify-center items-center cursor-pointer">
        <img className="" src={assets.search_icon} alt="Search Icon" />
        <img onClick={toggleHandler} src={assets.basket_icon} alt="Cart" />
        <motion.button
          className="rounded-full border-2 py-2 px-4"
          onClick={SignUpHandler}
          whileHover={{
            scale: 1.1,
          }} >
          Sign In
        </motion.button>
      </div>
    </header>
    </div>
  );
}

export default Navbar;
