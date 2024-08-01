import React from "react";
import { motion } from "framer-motion";
import icon from "../../assets/icons/conceptIcon.png";
import Slider from "../../components/coreconcept/Slider";

function CoreConcept() {
  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.5 } }, // Added delay here
  };

  return (
    <div className="lg:mx-[8rem] mt-[2rem] lg:mt-[5rem] pb-[4rem]">
      <div className="grid lg:flex justify-between items-center">
        <motion.div
          className="order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
            Core concept
          </h3>
          <p className="text-[0.875rem] w-full lg:max-w-[440px] mt-4 text-center lg:text-left">
            SolBnB is a Solana-based token project that partners with
            established Airbnb rental agencies. Token holders gain exposure to a
            network of vacation rentals, earning passive income through
            revenue-sharing agreements with partner agencies.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center order-2 lg:order-1 mt-[2rem] lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img className="w-[200px] h-[200px]" src={icon} alt="" />
        </motion.div>
      </div>

      <div>
        <motion.h3
          className="text-[#FF385C] text-center lg:text-left text-[1.75rem] font-bold mt-[2.8rem] lg:mt-[2.5rem] lg:mb-5"
          initial="hidden"
          animate="visible"
          variants={headingVariants} // Use headingVariants here
        >
          Key features
        </motion.h3>
      </div>
      <Slider />
    </div>
  );
}

export default CoreConcept;
