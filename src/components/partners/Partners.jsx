import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import partner1 from "../../assets/icons/partner1.png";
import partner2 from "../../assets/icons/partner2.png";
import partner3 from "../../assets/icons/partner3.png";
import partner4 from "../../assets/icons/partner4.png";
import partner5 from "../../assets/icons/partner5.png";
import partner6 from "../../assets/icons/partner6.png";
import partner7 from "../../assets/icons/partner7.png";
import partner8 from "../../assets/icons/partner8.png";
import partner9 from "../../assets/icons/partner9.png";
import partner10 from "../../assets/icons/partner10.png";
import partner11 from "../../assets/icons/partner11.png";
import partner12 from "../../assets/icons/partner12.png";
import partner13 from "../../assets/icons/partner13.png";
import partner14 from "../../assets/icons/partner14.png";
import partner15 from "../../assets/icons/partner15.png";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adjusts delay between animations of each child
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 100, // Start from right
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

function Partners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.partners-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="lg:mx-[8rem] mt-[2rem] lg:mt-[5rem] partners-container">
      <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
        Partners & Friends.
      </h3>

      <motion.div
        className='mx-4 lg:mx-0 grid grid-cols-2 lg:flex flex-row flex-wrap justify-center text-center gap-6 relative mt-[1rem] lg:mt-4'
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {[partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14, partner15].map((partner, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='item'
          >
            <img className='w-[180px]' src={partner} alt='' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Partners;
