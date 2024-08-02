import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import stand from "../../assets/images/STAND.svg";
import ellipse from "../../assets/images/Ellipse 1.svg";
import box from "../../assets/images/BOX.svg";
import house1 from "../../assets/images/house 1.svg";
import house2 from "../../assets/images/house 2.svg";
import house3 from "../../assets/images/house 3.svg";
import return1 from "../../assets/images/return1.svg";
import return2 from "../../assets/images/return2.svg";
import return3 from "../../assets/images/return3.svg";
import return4 from "../../assets/images/return4.svg";

const rightBox = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 500 },
};

const InvestAnimation = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value if necessary
  });

  return (
    <motion.div
      ref={sectionRef}
      className="w-full h-[550px] md:h-[50vh] bg-[#F7F7F7] relative flex flex-col md:flex-row"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 1 }}
    >
      {/* Left */}
      <motion.div className="md:w-1/2 w-full md:h-[50vh] h-[60%] mt-5 md:mt-0 overflow-hidden">
        <motion.div className="w-full h-full">
          <motion.div className="w-1/2 h-full mx-auto relative md:ml-52">
            <motion.img
              src={ellipse}
              width={200}
              className="absolute bottom-12"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            />
            <motion.img
              src={stand}
              width={150}
              className="absolute -bottom-0 left-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            />

            <motion.div
              className="absolute bottom-20 left-8"
              initial={{ opacity: 0, x: -300 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
            >
              <motion.img
                src={house1}
                width={120}
                className=""
                initial={{ opacity: 0, y: -300 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -300 }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-8"
              initial={{ opacity: 0, x: -300 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 3, delay: 1, repeat: Infinity }}
            >
              <motion.img
                src={house2}
                width={100}
                className=""
                initial={{ opacity: 0, y: -300 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -300 }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-8"
              initial={{ opacity: 0, x: -300 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            >
              <motion.img
                src={house3}
                width={80}
                className=""
                initial={{ opacity: 0, y: -300 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -300 }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Return */}
            <motion.div
              className="absolute bottom-24 left-10"
              initial={{ opacity: 0, x: 0 }}
              animate={inView ? { opacity: 1, x: 300 } : { opacity: 0, x: 0 }}
              transition={{ duration: 4, delay: 4.5, repeat: Infinity }}
            >
              <motion.img
                src={return1}
                width={80}
                className=""
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: -300 } : { opacity: 0, y: 100 }}
                transition={{ duration: 4, delay: 4.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-12"
              initial={{ opacity: 0, x: 0 }}
              animate={inView ? { opacity: 1, x: 300 } : { opacity: 0, x: 0 }}
              transition={{ duration: 4, delay: 4, repeat: Infinity }}
            >
              <motion.img
                src={return2}
                width={80}
                className=""
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: -300 } : { opacity: 0, y: 100 }}
                transition={{ duration: 4, delay: 4, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-12"
              initial={{ opacity: 0, x: 0 }}
              animate={inView ? { opacity: 1, x: 300 } : { opacity: 0, x: 0 }}
              transition={{ duration: 4, delay: 3.5, repeat: Infinity }}
            >
              <motion.img
                src={return3}
                width={80}
                className=""
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: -300 } : { opacity: 0, y: 100 }}
                transition={{ duration: 4, delay: 3.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-12"
              initial={{ opacity: 0, x: 0 }}
              animate={inView ? { opacity: 1, x: 300 } : { opacity: 0, x: 0 }}
              transition={{ duration: 4, delay: 3, repeat: Infinity }}
            >
              <motion.img
                src={return4}
                width={80}
                className=""
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: -300 } : { opacity: 0, y: 100 }}
                transition={{ duration: 4, delay: 3, repeat: Infinity }}
              />
            </motion.div>

            <motion.img
              src={box}
              width={100}
              className="absolute bottom-20 left-12"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 2, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right */}
      <motion.div
        className="md:w-1/2 w-full md:text-start text-center md:h-full h-[30%] md:px-5 flex flex-col mt-5 md:mt-0 md:justify-center items-start overflow-hidden"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={rightBox}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full md:text-5xl text-3xl font-bold"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightBox}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Invest, Earn, Travel, <br /> <span className="text-[#FF385C]">Repeat.</span>
        </motion.div>
        <motion.div
          className="text-[#6A6A6A] mt-5 mx-auto md:mx-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightBox}
          transition={{ duration: 1, delay: 1 }}
        >
          Invest in vacation rentals worldwide with SolBnB's innovative <br /> tokenized model. Simply buy, stake, and earn - we manage the <br /> partnerships and properties for you.
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InvestAnimation;
