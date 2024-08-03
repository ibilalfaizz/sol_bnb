import React from 'react';
import { motion } from 'framer-motion';
import AccordianData from '../../components/faq/AccordianData';
import { Link } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const accordionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const footerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Faq() {
  return (
    <div className="bg-[#f7f7f7]">
      <div className='lg:flex justify-between lg:mx-[8rem] mt-[2rem] lg:mt-[5rem] pt-[4rem]'>
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-[1.5rem] lg:text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0 lg:w-[280px] leading-8">
            Your questions,
            answered
          </h3>
        </motion.div>
        <motion.div
          variants={accordionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='w-full max-w-[600px]'
        >
          <div>
            <AccordianData title="Is my place right for Solbnb?">
              <p>This is the content of the first accordion item.</p>
            </AccordianData>
            <AccordianData title="Is my place right for Solbnb?">
              <p>This is the content of the second accordion item.</p>
            </AccordianData>
            <AccordianData title="Is my place right for Solbnb?">
              <p>This is the content of the third accordion item.</p>
            </AccordianData>
            <AccordianData title="Is my place right for Solbnb?">
              <p>This is the content of the fourth accordion item.</p>
            </AccordianData>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='bg-[#f7f7f7] w-full lg:flex justify-center pt-[2rem] lg:pt-[5rem] lg:pb-[3rem]'
      >
        <div className='bg-white box-border faq w-full lg:max-w-[1100px] flex justify-center lg:justify-end items-center rounded-[16px] py-[8rem] lg:py-[4rem] lg:px-[2rem]'>
          <div className='text-center lg:text-left'>
            <h3 className='text-[1.5rem]'>
              Still have questions?
            </h3>
            <p className='text-[0.875rem]'>Get answers from an experienced superhost near you.</p>
            <div>
              <Link className='border rounded-[4px] text-[0.8rem] flex justify-center items-center w-full lg:w-[150px] h-[40px] mt-6'>Contact Us</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Faq;
