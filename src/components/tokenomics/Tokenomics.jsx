import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./Tokenomics.css"; // Import the custom CSS

function Tokenomics() {
  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // Animation variants for the container of sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.5 } },
  };

  // Animation variants for each individual section
  const itemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Intersection Observer setup
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#f7f7f7] lg:mt-[5rem] w-full">
      <div className="mx-4 lg:mx-[8rem] lg:pt-[4rem] mt-[2rem]">
        <motion.h3
          className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0"
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={headingVariants}
          transition={{ duration: 1 }} // Adjust duration as needed
          ref={headingRef}
        >
          Tokenomics.
        </motion.h3>

        <motion.div
          className="grid-container mt-8 w-full justify-center lg:justify-start"
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={containerVariants}
          ref={containerRef}
        >
          {/* Each section item */}
          {[30, 50, 75, 40, 60].map((percent, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-[18px] w-[100%] lg:max-w-[200px] px-8 py-6"
              variants={itemVariants}
            >
              <div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-[#f7f7f7] stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>

                  <circle
                    className="text-[#FF385C] progress-ring__circle stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset={`calc(251.2 - (251.2 * ${percent}) / 100)`}
                  ></circle>

                  <text
                    className="font-bold"
                    fill="#FF385C"
                    x="50"
                    y="50"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                  >
                    {percent}%
                  </text>
                </svg>

                <h3 className="text-center text-[1rem] font-bold mt-2">
                  {["Presale", "Staking", "Marketing", "Community Rewards", "DEX/CEX Liquidity"][index]}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full text-center mt-[2.8rem] pb-[4rem]">
          <Link className="text-[#FF385C] text-sm lg:text-[1.5rem] font-bold border-[1px] border-[#FF385C] rounded-[50px] py-3 px-10">
            Token Supply : 69.000.000.000
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
