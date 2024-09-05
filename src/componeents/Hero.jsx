import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
function Hero() {
  return (
    <React.Fragment>
    <div className='bg-[url("/header_img.png")] bg-no-repeat bg-contain relative h-[34vw] text-white'>
      <motion.div
        className="flex flex-col justify-start gap-4 
       xl:pt-32 xl:ml-20
        lg:md:pt-24 lg:md:ml-12 lg:md:gap-2
        sm:pt-5 sm:ml-6 sm:gap-1
        max-sm:ml-1 max-sm:text-sm max-sm:pt-2 max-sm:gap-[2px]
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <h1 className="font-bold lg:text-4xl md:text-3xl sm:text-lg max-sm:text-lg ">
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
          className="rounded-full bg-white text-black lg:p-4 
          lg:w-36 md:sm:p-3 md:w-28 sm:p-1 sm:w-28 max-sm:w-24 max-sm:p-[2px]"
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
