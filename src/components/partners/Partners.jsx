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

import partner1Hover from "../../assets/icons/partner1-hover.png";
import partner2Hover from "../../assets/icons/partner2-hover.png";
import partner3Hover from "../../assets/icons/partner3-hover.png";
import partner4Hover from "../../assets/icons/partner4-hover.png";
import partner5Hover from "../../assets/icons/partner5-hover.png";
import partner6Hover from "../../assets/icons/partner6-hover.png";
import partner7Hover from "../../assets/icons/partner7-hover.png";
import partner8Hover from "../../assets/icons/partner8-hover.png";
import partner9Hover from "../../assets/icons/partner9-hover.png";
import partner10Hover from "../../assets/icons/partner10-hover.png";
import partner11Hover from "../../assets/icons/partner11-hover.png";
import partner12Hover from "../../assets/icons/partner12-hover.png";
import partner13Hover from "../../assets/icons/partner13-hover.png";
import partner14Hover from "../../assets/icons/partner14-hover.png";
import partner15Hover from "../../assets/icons/partner15-hover.png";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 100,
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const partners = [
    { default: partner1, hover: partner1Hover },
    { default: partner2, hover: partner2Hover },
    { default: partner3, hover: partner3Hover },
    { default: partner4, hover: partner4Hover },
    { default: partner5, hover: partner5Hover },
    { default: partner6, hover: partner6Hover },
    { default: partner7, hover: partner7Hover },
    { default: partner8, hover: partner8Hover },
    { default: partner9, hover: partner9Hover },
    { default: partner10, hover: partner10Hover },
    { default: partner11, hover: partner11Hover },
    { default: partner12, hover: partner12Hover },
    { default: partner13, hover: partner13Hover },
    { default: partner14, hover: partner14Hover },
    { default: partner15, hover: partner15Hover },
  ];

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
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='item'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              className='w-[180px]'
              src={hoveredIndex === index ? partner.hover : partner.default}
              alt={`Partner ${index + 1}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Partners;
