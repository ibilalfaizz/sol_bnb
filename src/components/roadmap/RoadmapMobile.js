import React from "react";
import { motion } from "framer-motion";

const RoadmapMobile = () => {
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
      <div className="w-full mt-20 relative mx-auto">
        <motion.div
          className="w-full absolute z-20 flex flex-col items-center gap-5 mx-auto"
          initial={{ x: 500 }}
          animate={{ x: -500 }}
          transition={{
            duration: 6,
            delay: 3,
            repeat: Infinity,
          }}
        >
          <div className="text-[#FF395C] w-[40px] h-[40px] text-center py-1 text-sm font-bold bg-white rounded-full border-[4px] border-[#FF395C]">
            Q1
          </div>
          <div className="text-center w-[220px] text-white border-x border-b rounded-xl px-4 py-4">
            Token launch and initial agency partnerships.
          </div>
        </motion.div>

        <motion.div
          className="w-full absolute z-20 flex flex-col items-center gap-5 mx-auto"
          initial={{ x: 500 }}
          animate={{ x: -500 }}
          transition={{
            duration: 6,
            delay: 5,
            repeat: Infinity,
          }}
        >
          <div className="text-[#FF395C] w-[40px] h-[40px] text-center py-1 text-sm font-bold bg-white rounded-full border-[4px] border-[#FF395C]">
            Q2
          </div>
          <div className="text-center w-[220px] text-white border-x border-b rounded-xl px-4 py-4">
            Platform development and beta testing.
          </div>
        </motion.div>

        <motion.div
          className="w-full absolute z-20 flex flex-col items-center gap-5 mx-auto"
          initial={{ x: 500 }}
          animate={{ x: -500 }}
          transition={{
            duration: 6,
            delay: 7,
            repeat: Infinity,
          }}
        >
          <div className="text-[#FF395C] w-[40px] h-[40px] text-center py-1 text-sm font-bold bg-white rounded-full border-[4px] border-[#FF395C]">
            Q3
          </div>
          <div className="text-center w-[260px] text-white border-x border-b rounded-xl px-4 py-4">
            Full platform launch and expansion of agency network.
          </div>
        </motion.div>

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

export default RoadmapMobile;
