import React, { useEffect, useState } from "react";

import image1 from "../../assets/images/image1.svg";
import image2 from "../../assets/images/image2.svg";
import image3 from "../../assets/images/image3.svg";
import logo1 from "../../assets/images/logo1.svg";
import eth from "../../assets/images/eth.svg";
import bsc from "../../assets/images/bsc.svg";
import sol from "../../assets/images/sql.svg";
import Timer from "./Timer";
import Slider from "./Slider";
import { BsExclamation } from "react-icons/bs";
import { motion } from "framer-motion";

const solbnb = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -300 },
};

const rightBox = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -500 },
};

const button = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -300 },
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

const data = {
  ETH: {
    ETH: 0.3,
    USDT: 0.1,
    USDC: 0.09
  },
  BSC: {
    ETH: 0.3,
    USDT: 0.1,
    USDC: 0.09
  },
  SOL: {
    ETH: 0.3,
    USDT: 0.1,
    USDC: 0.09
  },
};

const Hero = () => {
  const [pay, setPay] = useState("ETH");
  const [recieve, setRecieve] = useState("ETH");
  const [payIcon, setPayIcon] = useState(eth);
  const [recieveIcon, setRecieveIcon] = useState(eth);
  const [value, setValue] = useState(0);
  const [alert, setAlert] = useState(false);
  const [payValue, setPayValue] = useState("");
  let [exchanged, setExchanged] = useState("");

  function payHandler(event) {
    const payment = event.target.value;
    setPayValue(event.target.value);
    setValue(payment);

  }
  
  useEffect(()=> {
    let ans = (data[pay][recieve] * value);
    setExchanged(ans);
  }, [payValue])

  function submitHandler() {
    setAlert(true);
  }

  function closeAlertHandler() {
    setAlert(false);
  }

  return (
    <motion.div
      className="w-[90%] h-[65%] flex items-center mx-auto rounded-2xl px-10 py-4 bg-gradient-to-r from-[#F9F9F9] to-white border-[4px] border-[#F9F9F9] relative"
    >
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
          className="w-full h-full ml-6 px-10 flex flex-col items-center gap-2"
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

          <div>
            <div className="w-full flex justify-between">
              <div
                className="flex gap-2 items-center cursor-pointer px-2 py-1 rounded-t-xl"
                onClick={() => {
                  setPay("ETH");
                  setPayIcon(eth);
                }}
                style={{
                  backgroundColor: `${pay}` === "ETH" ? "#000000" : "",
                  color: `${pay}` === "ETH" ? "#ffffff" : "",
                }}
              >
                <img src={eth} width={25} />
                <span>ETH</span>
              </div>

              <div
                className="flex gap-2 items-center cursor-pointer px-2 py-1 rounded-t-xl"
                onClick={() => {
                  setPay("BSC");
                  setPayIcon(bsc);
                }}
                style={{
                  backgroundColor: `${pay}` === "BSC" ? "#000000" : "",
                  color: `${pay}` === "BSC" ? "#ffffff" : "",
                }}
              >
                <img src={bsc} width={25} />
                <span>BSC</span>
              </div>

              <div
                className="flex gap-2 items-center cursor-pointer px-2 py-1 rounded-t-xl"
                onClick={() => {
                  setPay("SOL");
                  setPayIcon(sol);
                }}
                style={{
                  backgroundColor: `${pay}` === "SOL" ? "#000000" : "",
                  color: `${pay}` === "SOL" ? "#ffffff" : "",
                }}
              >
                <img src={sol} width={25} />
                <span>SOL</span>
              </div>
            </div>

            <div className="w-full flex justify-between border-[1.5px] border-black py-2 px-4 rounded-3xl" style={{borderTopLeftRadius : pay === ("ETH") ? ('0px') : (''), borderTopRightRadius : pay === "SOL" ? ('0px') : (''), }} >
              <div
                className="flex gap-2 items-center cursor-pointer px-2 py-1 rounded-2xl"
                onClick={() => {
                  setRecieve("ETH");
                  setRecieveIcon(eth);
                }}
                style={{
                  backgroundColor: `${recieve}` === "ETH" ? "#FD395C" : "",
                }}
              >
                <img src={eth} width={25} />
                <span>ETH</span>
              </div>

              <div
                className="flex gap-2 items-center cursor-pointer px-2 py-1 rounded-2xl"
                onClick={() => {
                  setRecieve("USDT");
                  setRecieveIcon(bsc);
                }}
                style={{
                  backgroundColor: `${recieve}` === "USDT" ? "#FD395C" : "",
                }}
              >
                <img src={bsc} width={25} />
                <span>USDT</span>
              </div>

              <div
                className="flex gap-2 items-center cursor-pointer px-2 py-1 rounded-2xl"
                onClick={() => {
                  setRecieve("USDC");
                  setRecieveIcon(sol);
                }}
                style={{
                  backgroundColor: `${recieve}` === "USDC" ? "#FD395C" : "",
                }}
              >
                <img src={sol} width={25} />
                <span>USDC</span>
              </div>
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
                  type="number"
                  placeholder="0"
                  className="w-[80%] bg-transparent pl-3 text-[#6A6A6A] outline-none"
                  onChange={payHandler}
                />
                <img src={payIcon} width={25} />
              </div>
            </div>

            {/* Right */}
            <div className="w-1/2 flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-xs font-bold">Receive $SOLBNB</span>
              </div>
              <div className="flex border-[1.5px] border-black rounded-full">
                <div
                  type="number"
                  placeholder="0"
                  className="w-[80%] bg-transparent pl-3 text-[#6A6A6A] outline-none overflow-hidden"
                >
                  {exchanged}
                </div>
                <img src={recieveIcon} width={25} />
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
        onClick={submitHandler}
      >
        Connect wallet
      </motion.button>

      {/* Alert Box */}
      <div>
        {alert ? (
          <div className="absolute -top-10 right-10 rounded-3xl w-[350px] h-[150px] bg-slate-900 py-4 px-3 text-xl font-bold text-white text-center">
            <div>{`You have selected ${value} ${pay} which is equal to ${exchanged} ${recieve}`}</div>

            <button
              className="bg-red-500 cursor-pointer px-3 py-1 rounded-xl mt-4"
              onClick={closeAlertHandler}
            >
              CLOSE
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

export default Hero;