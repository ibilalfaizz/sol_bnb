import React from "react";
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <motion.div className="w-full h-[50vh] bg-[#FF385C] py-4 overflow-hidden">
      {/* Top */}
      <motion.div
        className="h-1/2b mx-20 mt-6 text-4xl font-bold text-white"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
        }}
      >
        Roadmap.
      </motion.div>

      {/* Bottom */}
      <div className="mt-20 relative">
        <div className="absolute w-full flex justify-around gap-10 md:gap-0 z-10">
          <div className="flex flex-col items-center gap-5 ml-4 md:ml-0">
            <motion.div
              className="text-[#FF395C] w-[40px] h-[40px] text-center py-1 text-sm font-bold bg-white rounded-full border-[4px] border-[#FF395C]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
            >
              Q1
            </motion.div>
            <motion.div
              className="text-center w-[220px] text-white border-x border-b rounded-xl px-4 py-4"
              initial={{ opacity: 0, y: 300, scale: 0.25 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: 2,
              }}
            >
              Token launch and initial agency partnerships.
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="text-[#FF395C] w-[40px] h-[40px] text-center text-sm py-1 font-bold bg-white rounded-full border-[4px] border-[#FF395C]"
              initial={{ opacity: 0, x: -200, scale: 0.25 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 3,
              }}
            >
              Q2
            </motion.div>
            <motion.div
              className="text-center w-[200px] text-white border-x border-b rounded-xl px-4 py-4"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: 3,
              }}
            >
              Platform development and beta testing.
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="text-[#FF395C] w-[40px] h-[40px] text-center text-sm py-1 font-bold bg-white rounded-full border-[4px] border-[#FF395C]"
              initial={{ opacity: 0, x: -200, scale: 0.25 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 4,
              }}
            >
              Q3
            </motion.div>
            <motion.div
              className="text-center w-[260px] text-white border-x border-b rounded-xl px-4 py-4"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: 4,
              }}
            >
              Full platform launch and expansion of agency network.
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="text-[#FF395C] w-[40px] h-[40px] text-center text-sm py-1 font-bold bg-white rounded-full border-[4px] border-[#FF395C]"
              initial={{ opacity: 0, x: -200, scale: 0.25 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 5,
              }}
            >
              Q4
            </motion.div>
            <motion.div
              className="text-center w-[280px] text-white border-x border-b rounded-xl px-4 py-4"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 5,
              }}
            >
              Introduction of NFT features and additional partner services.
            </motion.div>
          </div>
        </div>

        <motion.div
          className="w-full h-[5px] absolute bg-white top-4"
          initial={{ opacity: 1, x: -3000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 5,
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Roadmap;
