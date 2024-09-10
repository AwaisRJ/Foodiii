import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-[#323232] text-white px-5 py-10 mt-8">
    <div
      className="flex min-[616px]:flex-row min-[616px]:justify-between 
      max-[615px]:flex-col max-[615px]:items-center w-full"
      id="footer" >
     
      <div className="min-[616px]:w-1/3 max-[615px]:w-full">
        <h1 className="text-orange-500 font-bold text-3xl pb-3">Tomato.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
          doloribus assumenda voluptate architecto rerum quia, cumque possimus
          minima impedit?
        </p>
        <div className="flex pt-3 gap-2 cursor-pointer">
          <motion.img
            whileHover={{
              backgroundColor: "#4267B2",
              radius: "rounded",
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            src={assets.facebook_icon}
            alt="FaceBook"
          />
          <motion.img
            whileHover={{
              backgroundColor: "#1DA1F2",
              radius: "rounded",
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            src={assets.twitter_icon}
            alt="Twitter"
          />
          <motion.img
            whileHover={{
              backgroundColor: "#0a66c2",
              radius: "rounded",
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            src={assets.linkedin_icon}
            alt="LinkedIn"
          />
        </div>
      </div>
      <div className="max-[615px]:w-full mt-3">
        <h1 className="font-bold text-3xl pb-3">Company</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="max-[615px]:w-full mt-3">
        <h1 className="font-bold text-3xl pb-3">GET IN TOUCH</h1>
        <ul>
          <li>+44 233 3212</li>
          <li>order@tomato.com</li>
        </ul>
      </div>
    </div>
    <hr className="h-[2px] my-8 bg-gray-500 border-none" />
    </div>
  );
};

export default Footer;
