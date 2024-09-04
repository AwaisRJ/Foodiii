import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="flex justify-between bg-[#323232] text-white w-full" id="footer"> 
      <div className="w-1/3">
        <h1 className="text-orange-500 font-bold text-3xl">Tomato.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
          doloribus assumenda voluptate architecto rerum quia, cumque possimus
          minima impedit?
        </p>
        <div className="flex">
            <img src={assets.facebook_icon} alt="FaceBook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Company</h1>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl">GET IN TOUCH</h1>
        <ul>
            <li>+44 233 3212</li>
            <li>order@tomato.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
