import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/image1.svg";

import image2 from "../../assets/images/image2.svg";
import image3 from "../../assets/images/image3.svg";
import logo1 from "../../assets/images/logo1.svg";
import eth from "../../assets/images/eth.svg";
import bsc from "../../assets/images/bsc.svg";
import sql from "../../assets/images/sql.svg";
import Timer from "./Timer";
import Slider from "./Slider";
import { BsExclamation } from "react-icons/bs";
import { motion } from "framer-motion";

const solbnb = {
  visible: { opacity: 1, x: 0, z: 0 },
  hidden: { opacity: 0, x: -300, z: -20 },
};

const rightBox = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -500 },
};

const button = {
  visible: { opacity: 1, x: 0, z: 0 },
  hidden: { opacity: 0, x: -300, z: -20 },
};

const img1x = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -200 },
};

const img1y = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -200 },
};

const img2x = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -600 },
};

const img2y = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 150 },
};

const img3x = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -400 },
};

const img3y = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 300 },
};

const Hero = () => {
  return (
    <motion.div className="w-[90%] h-[65%] flex items-center mx-auto rounded-2xl px-10 py-4 bg-gradient-to-r from-[#F9F9F9] to-white border-[4px] border-[#F9F9F9] relative">
      {/* Left Section */}
      <div className="w-1/3 h-full pt-5 relative">
        <div className="w-full overflow-hidden">
          <motion.div
            className="text-4xl text-[#FF385C] font-bold"
            initial="hidden"
            animate="visible"
            variants={solbnb}
            transition={{
              duration: 1,
            }}
          >
            SolBnB.
          </motion.div>
          <motion.div
            className="text-4xl font-bold"
            initial="hidden"
            animate="visible"
            variants={solbnb}
            transition={{
              duration: 1.2,
            }}
          >
            Tokenized Airbnb <br /> Partnerships on <br /> Solana
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={img1x}
            transition={{
              duration: 1,
            }}
            className="absolute left-16 bottom-4"
          >
            <motion.img
              src={image1}
              width={180}
              initial="hidden"
              animate="visible"
              variants={img1y}
              transition={{
                duration: 0.5,
              }}
            />
          </motion.div>
          {/* <img src={image2} width={100} className='absolute right-12 bottom-40'/> */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={img2x}
            transition={{
              duration: 0.5,
            }}
            className="absolute right-10 bottom-40"
          >
            <motion.img
              src={image2}
              width={100}
              initial="hidden"
              animate="visible"
              variants={img2y}
              transition={{
                duration: 1,
              }}
            />
          </motion.div>

          {/* <img src={image3} width={100} className='absolute -right-10 top-5'/> */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={img3x}
            transition={{
              duration: 0.4,
            }}
            className="absolute -right-10 top-5"
          >
            <motion.img
              src={image3}
              width={100}
              initial="hidden"
              animate="visible"
              variants={img3y}
              transition={{
                duration: 0.8,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Middle Logo */}
      <motion.div
        className="w-1/3 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img src={logo1} className=" scale-125" />
      </motion.div>

      {/* Right Section */}
      <div className="w-1/3 h-full overflow-hidden">
        <motion.div
          className="w-full h-full ml-6 px-10 flex flex-col items-center gap-3"
          initial="hidden"
          animate="visible"
          variants={rightBox}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <div className="text-sm">Buy $SOLBNB presale!</div>
          <div className="w-full">
            <Timer />
          </div>
          <div className="text-[#6A6A6A] text-sm">
            Until Next Price Increase
          </div>
          <div>
            <Slider />
          </div>

          <div className="flex gap-2 items-center text-[#6A6A6A] text-xs">
            <div>YOUR PURCHASED $SOLBNB= 0</div>
            <div className="border border-[#6A6A6A] rounded-full text-sm">
              <BsExclamation width={5} className="text-xl" />
            </div>
          </div>

          <div className="flex gap-3 items-center text-[#6A6A6A] text-xs">
            <div>YOUR STAKEABLE $SOLBNB= 0</div>
            <div className="border border-[#6A6A6A] rounded-full text-sm">
              <BsExclamation width={5} className="text-xl" />
            </div>
          </div>

          <div className="font-bold text-sm">1 $SOLBNB = $0.000722</div>

          <div className="w-full flex justify-between px-4">
            <div className="flex gap-2 items-center">
              <img src={eth} width={25} />
              <span>ETH</span>
            </div>

            <div className="flex gap-2 items-center">
              <img src={bsc} width={25} />
              <span>BSC</span>
            </div>

            <div className="flex gap-2 items-center">
              <img src={sql} width={25} />
              <span>SOL</span>
            </div>
          </div>

          <div className="w-full flex justify-between border-[1.5px] border-black py-2 px-4 rounded-full">
            <div className="flex gap-2 items-center">
              <img src={eth} width={25} />
              <span>ETH</span>
            </div>

            <div className="flex gap-2 items-center">
              <img src={bsc} width={25} />
              <span>BSC</span>
            </div>

            <div className="flex gap-2 items-center">
              <img src={sql} width={25} />
              <span>SQL</span>
            </div>
          </div>

          {/* Form */}
          <div className="w-full flex gap-2">
            {/* Left */}
            <div className="w-1/2 flex flex-col gap-1">
              <div className="flex justify-between px-2">
                <span className="text-xs font-bold">Pay with ETH</span>
                <span className="text-xs font-bold text-[#FD395C]">Max</span>
              </div>
              <div className="flex border-[1.5px] border-black rounded-full">
                <input
                  type="numbers"
                  placeholder="0"
                  className="w-[80%] bg-transparent pl-3 text-[#6A6A6A]"
                />
                <img src={eth} width={25} />
              </div>
            </div>

            {/* Right */}
            <div className="w-1/2 flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-xs font-bold">Receive $SOLBNB</span>
              </div>
              <div className="flex border-[1.5px] border-black rounded-full">
                <input
                  type="numbers"
                  placeholder="0"
                  className="w-[80%] bg-transparent pl-3 text-[#6A6A6A]"
                />
                <img src={logo1} width={15} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.button
        className="absolute overflow-hidden -bottom-10 right-12 w-[26%] bg-[#FD395C] text-center rounded-full py-3 text-sm font-bold text-white"
        initial="hidden"
        animate="visible"
        variants={button}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        Connect wallet
      </motion.button>
    </motion.div>
  );
};

export default Hero;
