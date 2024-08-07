import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mapflow1 from "../../assets/icons/MapFlow1.gif";
import investLeft from "../../assets/icons/invest-left.png";
import investRight from "../../assets/icons/invest-right.png";
import invetMobileIcon from "../../assets/icons/investMobileIcon.png";
import {Container} from "react-bootstrap"

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
    <div className="d-flex justify-content-center align-items-center m" >
    <Container className=" mx-auto px-4">
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

      <div className="block w-full lg:flex flex-col lg:flex-row justify-center items-center lg:px-[5rem] lg:mt-[4rem]">
        {/* Desktop Left Image */}
        <motion.div
          className="hidden xl:block lg:block flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          <img
            className="w-full max-w-[350px] h-[300px] "
            src={investLeft}
            alt="Invest Left"
          />
        </motion.div>

        {/* Mobile Icon - Move to the top in mobile view */}
        <motion.div
          className="flex-shrink-0 block xl:hidden lg:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
        >
          <img
            className="w-full max-w-[400px]"
            src={invetMobileIcon}
            alt="Invest Mobile Icon"
          />
        </motion.div>

        {/* Mapflow1 GIF for both mobile and desktop */}
        <motion.div
          className="relative w-full"
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

        {/* Desktop Right Image */}
        <motion.div
          className="hidden xl:block lg:block flex-shrink-0 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
        >
          <img
            className="w-full max-w-[300px] h-[250px] "
            src={investRight}
            alt="Invest Right"
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
              <p className="w-full lg:max-w-[260px] text-[#7777] text-[0.9rem] mt-1 lg:mt-2">
                {index === 0 && "Earn from bookings made through partner agencies."}
                {index === 1 && "Low-cost transaction fees on the SolBnB platform."}
                {index === 2 && "Additional services and features for higher-tier token holders."}
              </p>
            </motion.div>
          );
        })}
      </div>
      </Container>
    </div>
    
  );
}

export default Invest;
