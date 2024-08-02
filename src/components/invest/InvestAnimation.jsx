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

// Define animation variants
const rightBox = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 500 },
};

const leftBox = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -500 },
};

// Define mobile-specific animations
const mobileBox = {
  hidden: { opacity: 0, scale: 0.8, rotate: 0 },
  visible: { opacity: 1, scale: 1, rotate: 360 },
  popUp: { opacity: 1, scale: 1, y: [0, -20, 0] },
};

const InvestAnimation = () => {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });

  return (
    <motion.div className="w-[100%] h-[800px] md:h-[50vh] bg-[#F7F7F7] relative flex flex-col md:flex-row">
      {/* Left */}
      <motion.div
        ref={leftRef}
        className="md:w-1/2 w-full md:h-[50vh] h-[80%] overflow-hidden"
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        variants={leftBox}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <motion.div className="w-full h-full">
          <motion.div className="w-1/2 h-full mx-auto relative md:ml-52">
            <motion.img
              src={ellipse}
              width={200}
              className="absolute bottom-12"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={leftInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
            <motion.img
              src={stand}
              width={150}
              className="absolute -bottom-0 left-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={leftInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />

            <motion.div
              className="absolute bottom-20 left-8"
              initial={{ opacity: 0, x: -300 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 3,
                delay: 1.5,
                repeat: Infinity,
              }}
            >
              <motion.img
                src={house1}
                width={120}
                initial={{ opacity: 0, y: -300 }}
                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  repeat: Infinity,
                }}
                className="mobile-animation"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-8"
              initial={{ opacity: 0, x: -300 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
              }}
            >
              <motion.img
                src={house2}
                width={100}
                initial={{ opacity: 0, y: -300 }}
                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                }}
                className="mobile-animation"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-8"
              initial={{ opacity: 0, x: -300 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
              }}
            >
              <motion.img
                src={house3}
                width={80}
                initial={{ opacity: 0, y: -300 }}
                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                }}
                className="mobile-animation"
              />
            </motion.div>

            {/* Return */}
            <motion.div
              className="absolute bottom-24 left-10"
              initial={{ opacity: 0, x: 0 }}
              animate={leftInView ? { opacity: 1, x: 300 } : {}}
              transition={{
                duration: 4,
                delay: 4.5,
                repeat: Infinity,
              }}
            >
              <motion.img
                src={return1}
                width={80}
                initial={{ opacity: 0, y: 100 }}
                animate={leftInView ? { opacity: 1, y: -300 } : {}}
                transition={{
                  duration: 4,
                  delay: 4.5,
                  repeat: Infinity,
                }}
                className="mobile-animation"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-12"
              initial={{ opacity: 0, x: 0 }}
              animate={leftInView ? { opacity: 1, x: 300 } : {}}
              transition={{
                duration: 4,
                delay: 4,
                repeat: Infinity,
              }}
            >
              <motion.img
                src={return2}
                width={80}
                initial={{ opacity: 0, y: 100 }}
                animate={leftInView ? { opacity: 1, y: -300 } : {}}
                transition={{
                  duration: 4,
                  delay: 4,
                  repeat: Infinity,
                }}
                className="mobile-animation"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-12"
              initial={{ opacity: 0, x: 0 }}
              animate={leftInView ? { opacity: 1, x: 300 } : {}}
              transition={{
                duration: 4,
                delay: 3.5,
                repeat: Infinity,
              }}
            >
              <motion.img
                src={return3}
                width={80}
                initial={{ opacity: 0, y: 100 }}
                animate={leftInView ? { opacity: 1, y: -300 } : {}}
                transition={{
                  duration: 4,
                  delay: 3.5,
                  repeat: Infinity,
                }}
                className="mobile-animation"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-12"
              initial={{ opacity: 0, x: 0 }}
              animate={leftInView ? { opacity: 1, x: 300 } : {}}
              transition={{
                duration: 4,
                delay: 3,
                repeat: Infinity,
              }}
            >
              <motion.img
                src={return4}
                width={80}
                initial={{ opacity: 0, y: 100 }}
                animate={leftInView ? { opacity: 1, y: -300 } : {}}
                transition={{
                  duration: 4,
                  delay: 3,
                  repeat: Infinity,
                }}
                className="mobile-animation"
              />
            </motion.div>

            <motion.img
              src={box}
              width={100}
              className="absolute bottom-20 left-12"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={leftInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 2,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right */}
      <motion.div
        ref={rightRef}
        className="md:w-1/2 w-full md:text-start text-center md:h-full h-[30%] md:px-5 flex flex-col items-center justify-center"
        initial="hidden"
        animate={rightInView ? "visible" : "hidden"}
        variants={rightBox}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={rightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Investment Opportunities
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={rightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          Discover the best opportunities for your future investments with our comprehensive analysis and insights.
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={rightInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default InvestAnimation;
