import React from "react";
import { motion } from "framer-motion";
import map from "../../assets/icons/map.png";
import investLeft from "../../assets/icons/invest-left.png";
import investRight from "../../assets/icons/invest-right.png";
import invetMobileIcon from "../../assets/icons/investMobileIcon.png";
import './Invest.css'; // Import the CSS file

// Define animation variants
const mapVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

function Invest() {
  return (
    <div className="mt-[5rem]">
      <h3 className="text-[1.875rem] font-bold text-center">
        Invest, earn, and travel with{" "}
        <span className="text-[#FF385C]">SolBnB.</span>
      </h3>

      <div className="block w-full lg:flex justify-center items-center lg:px-[5rem] lg:mt-[4rem]">
        <div>
          <motion.img
            className="w-full max-w-[350px] h-[300px] hidden xl:block lg:block md:hidden"
            src={investLeft}
            alt="Invest Left"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
          <motion.img
            className="w-full max-w-[400px] block xl:hidden lg:hidden md:block mx-auto"
            src={invetMobileIcon}
            alt="Invest Mobile Icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </div>
        <div className="relative">
          <motion.img
            className="w-[500px] mx-auto"
            src={map}
            alt="Map"
            variants={mapVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <div className="cross-overlay">
            <div className="cross">
              <motion.div
                className="line diagonal1"
                initial={{ width: 0 }}
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <motion.div
                className="line diagonal2"
                initial={{ width: 0 }}
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
        <div>
          <motion.img
            className="w-full max-w-[350px] h-[300px] hidden xl:block lg:block md:hidden"
            src={investRight}
            alt="Invest Right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </div>
      </div>

      <div className="xl:flex lg:flex md:flex justify-between mx-[1rem] lg:mx-[8rem] mt-[2rem] lg:mt-[3rem]">
        <div className="text-center lg:text-left">
          <h3 className="text-[1rem] font-bold">Partner Commissions</h3>
          <p className="w-full lg:max-w-[260px] text-[#6a6a6a] text-[0.9rem] mt-1 lg:mt-2">
            Earn from bookings made through partner agencies.
          </p>
        </div>
        <div className="text-center lg:text-left my-4 lg:my-0">
          <h3 className="text-[1rem] font-bold">Partner Commissions</h3>
          <p className="w-full lg:max-w-[260px] text-[#6a6a6a] text-[0.9rem] mt-1 lg:mt-2">
            Low-cost transaction fees on the SolBnB platform.
          </p>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-[1rem] font-bold">Partner Commissions</h3>
          <p className="w-full lg:max-w-[260px] text-[#6a6a6a] text-[0.9rem] mt-1 lg:mt-2">
            Additional services and features for higher-tier token holders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Invest;
