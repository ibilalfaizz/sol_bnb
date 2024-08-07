import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import card1 from "../../assets/icons/techicon-1.png";
import card2 from "../../assets/icons/techicon-2.png";
import card3 from "../../assets/icons/Nft.png";
import bigmobile from "../../assets/icons/bigmobile.png";
import {Container} from "react-bootstrap"


function Technology() {
  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 }, // Stagger children animations
    },
  };

  // Custom hook to detect scroll into view
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1, // Adjust as needed
    });

    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [inView, controls]);

    return [ref, controls];
  };

  // Create refs and controls for the container and the key difference section
  const [containerRef, containerControls] = useScrollAnimation();
  const [keyDifferenceRef, keyDifferenceControls] = useScrollAnimation();
  const [imageRef, imageControls] = useScrollAnimation();

  // Animation variants for key difference section
  const keyDifferenceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="d-flex justify-content-center align-items-center m" >
    <Container className=" mx-auto">
    <div className="mx-4 lg:mx-[8rem] mt-[2rem] lg:mt-[5rem]">
      <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
        Technology
      </h3>

      <motion.div
        className='lg:flex justify-between items-center mt-8 mb-12'
        variants={containerVariants}
        initial="hidden"
        animate={containerControls}
        ref={containerRef}
      >
        {/* Card 1 */}
        <motion.div
          className='bg-gradient-to-t from-[#f7f7f7] to-[transparent] rounded-[16px] px-8 py-10'
          variants={cardVariants}
        >
          <img className='h-[220px] mx-auto' src={card1} alt='' />
          <h3 className='text-[#FF385C] font-bold mt-4'>Blockchain</h3>
          <p className='text-[0.875rem] text-[#6a6a6a] lg:w-[180px] text-left mt-2'>
            Solana for fast and secure transactions.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className='bg-gradient-to-t from-[#f7f7f7] to-[transparent] rounded-[16px] px-8 py-10'
          variants={cardVariants}
        >
          <img className='h-[220px] mx-auto' src={card2} alt='' />
          <h3 className='text-[#FF385C] font-bold mt-4'>Smart Contracts</h3>
          <p className='text-[0.875rem] text-[#6a6a6a] lg:w-[180px] text-left mt-2'>
            Ensure transparent and automatic revenue sharing.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className='bg-gradient-to-t from-[#f7f7f7] to-[transparent] rounded-[16px] px-8 py-10'
          variants={cardVariants}
        >
          <img className='h-[220px] mx-auto' src={card3} alt='' />
          <h3 className='text-[#FF385C] font-bold mt-4'>NFT Integration</h3>
          <p className='text-[0.875rem] text-[#6a6a6a] lg:w-[180px] text-left mt-2'>
            Represent partnership tiers and premium access.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className='bg-[#f7f7f7] rounded-[16px] lg:px-10 lg:py-8 lg:mt-[5rem] grid lg:flex items-center relative'
        initial="hidden"
        animate={keyDifferenceControls}
        ref={keyDifferenceRef}
      >
        <motion.div
          className='order-2 mx-[2rem] lg:mx-0'
          variants={keyDifferenceVariants}
        >
          <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-left mt-[1.8rem] lg:mt-0">
            Key Difference
          </h3>
          <ul className='list-disc pl-5 mt-4 '>
            <li className='text-[1rem] leading-[2rem]'>No direct property ownership or management.</li>
            <li className='text-[1rem] leading-[2rem]'>Focus on building and maintaining agency partnerships.</li>
            <li className='text-[1rem] leading-[2rem] lg:w-[380px]'>Revenue tied to partner performance rather than specific properties.</li>
            <li className='text-[1rem] leading-[2rem] lg:w-[380px]'>Potentially lower operational costs but higher dependence on partner quality.</li>
          </ul>
        </motion.div>

        <motion.div
          className='lg:absolute lg:right-0'
          variants={imageVariants}
          initial="hidden"
          animate={imageControls}
          ref={imageRef}
        >
          <img className='w-full max-w-[350px] mx-auto lg:max-w-[600px] lg:h-auto' src={bigmobile} alt='' />
        </motion.div>
      </motion.div>
    </div>
    </Container>
    </div>
  );
}

export default Technology;
