import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mapflow1 from "../../assets/icons/MapFlow1.gif";
import investLeft from "../../assets/icons/invest-left.png";
import investRight from "../../assets/icons/invest-right.png";
import invetMobileIcon from "../../assets/icons/investMobileIcon.png";

// Define animation variants
const mapVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Invest() {
  // Initialize useInView for title and image
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Initialize useInView for sections
  const sectionRefs = [
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
  ];

  return (
    <div className="mt-[5rem]">
      <motion.h3
        className="text-[1.875rem] font-bold text-center"
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        Invest, earn, and travel with{" "}
        <span className="text-[#FF385C]">SolBnB.</span>
      </motion.h3>

      <div className="block w-full lg:flex justify-center items-center lg:px-[5rem] lg:mt-[4rem]">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          <img
            className="w-full max-w-[350px] h-[300px] hidden xl:block lg:block md:hidden"
            src={investLeft}
            alt="Invest Left"
          />
        </motion.div>

        <motion.div
          className="relative"
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
        >
          <img
            className="w-[500px] mx-auto"
            src={Mapflow1}
            alt="Map"
            variants={mapVariants}
            initial="initial"
            animate={imageInView ? "animate" : "initial"}
            exit="exit"
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
        >
          <img
            className="w-full max-w-[350px] h-[300px] hidden xl:block lg:block md:hidden"
            src={investRight}
            alt="Invest Right"
          />
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
        >
          <img
            className="w-full max-w-[400px] block xl:hidden lg:hidden md:block mx-auto"
            src={invetMobileIcon}
            alt="Invest Mobile Icon"
          />
        </motion.div>
      </div>

      <div className="xl:flex lg:flex md:flex justify-between mx-[1rem] lg:mx-[8rem] mt-[2rem] lg:mt-[3rem]">
        {["Partner Commissions", "Partner Commissions", "Partner Commissions"].map((title, index) => {
          const { ref, inView } = sectionRefs[index];

          return (
            <motion.div
              className="text-center lg:text-left p-4"
              key={index}
              ref={ref}
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.2 }}
            >
              <h3 className="text-[1rem] font-bold">{title}</h3>
              <p className="w-full lg:max-w-[260px] text-[#6a6a6a] text-[0.9rem] mt-1 lg:mt-2">
                {index === 0 && "Earn from bookings made through partner agencies."}
                {index === 1 && "Low-cost transaction fees on the SolBnB platform."}
                {index === 2 && "Additional services and features for higher-tier token holders."}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Invest;
