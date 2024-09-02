import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
function Hero() {
  return (
    <React.Fragment>
    <div className='bg-[url("/header_img.png")] bg-no-repeat bg-contain relative h-[34vw] text-white'>
      <motion.div
        className="flex flex-col justify-start gap-4 pt-32 ml-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <h1 className="font-bold text-4xl">
          Order Your <br /> Favorite Food Here
        </h1>
        <p>
          Choose from a diverse menu and selct according to your taste and
          personality. <br />
          Check our favorit meals that are loved by almost every customer.{" "}
          <br />
          Thank you for Coming!
        </p>
        <motion.button
          className="rounded-full bg-white text-black p-4 w-36"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          View Menu
        </motion.button>
      </motion.div>
    </div>
    </React.Fragment>
  );
}

export default Hero;
