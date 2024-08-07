import React from 'react';
import { motion } from 'framer-motion';
import risk1 from "../../assets/images/risk1.svg";
import risk2 from "../../assets/images/risk2.svg";
import risk3 from "../../assets/images/risk3.svg";
import risk4 from "../../assets/images/risk4.svg";
import risk5 from "../../assets/images/risk5.svg";
import { Container } from 'react-bootstrap';

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 50, // Start from the right
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

function Risk() {
  return (
    <Container className="lg:mx-[8rem] mt-[2rem] lg:mt-[4rem]">
      <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
        Risks and Challenges.
      </h3>

      <div className='grid gap-4 mx-4 lg:mx-0 lg:flex justify-between mt-6'>
        {/* First row with sequential animation from right to left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.1 }} // Delay for first image
          className='w-full max-w-[500px]' // Adjust size as needed
        >
          <img src={risk1} alt='Risk 1' className='w-full h-auto'/>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.3 }} // Delay for second image
          className='w-full max-w-[500px]' // Adjust size as needed
        >
          <img src={risk2} alt='Risk 2' className='w-full h-auto'/>
        </motion.div>
      </div>

      <div className='grid gap-4 mx-4 lg:mx-0 lg:flex justify-between mt-4'>
        {/* Second row with sequential animation from right to left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.5 }} // Delay for third image
          className='w-full max-w-[500px]' // Adjust size as needed
        >
          <img src={risk3} alt='Risk 3' className='w-full h-auto'/>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.7 }} // Delay for fourth image
          className='w-full max-w-[500px]' // Adjust size as needed
        >
          <img src={risk4} alt='Risk 4' className='w-full h-auto'/>
        </motion.div>
      </div>

      <div className='mx-4 lg:mx-0 mt-4'>
        {/* Last card with right-to-left animation sequentially */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.9 }} // Delay for fifth image
          className='w-full max-w-[1000px]' // Adjust size as needed
        >
          <img src={risk5} alt='Risk 5' className='w-full h-auto'/>
        </motion.div>
      </div>
    </Container>
  );
}

export default Risk;
