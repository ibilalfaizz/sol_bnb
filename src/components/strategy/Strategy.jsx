import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Container} from "react-bootstrap"


function Strategy() {
  // Animation variants for the cards
  const cardVariants = (direction) => ({
    hidden: { opacity: 0, y: direction === 'up' ? -50 : 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  });

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

  // Create refs and controls for the cards
  const [card1Ref, card1Controls] = useScrollAnimation();
  const [card2Ref, card2Controls] = useScrollAnimation();
  const [card3Ref, card3Controls] = useScrollAnimation();
  const [card4Ref, card4Controls] = useScrollAnimation();

  return (
    <div className="d-flex justify-content-center align-items-center m" >
    <Container className=" mx-auto">
    <div className="lg:mx-[8rem] mt-[2rem] lg:mt-[5rem] mb-[5rem]">
      <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
        Partnership Strategy
      </h3>

      <div className='grid mx-[3rem] lg:mx-0 lg:flex justify-center lg:justify-between items-center'>
        <motion.div
          className='relative mt-10'
          variants={cardVariants('up')}
          initial="hidden"
          animate={card1Controls}
          ref={card1Ref}
        >
          <div className='absolute bg-[#ff9bad] h-[30px] w-[30px] top-[-12px] left-[-10px] rounded-[50px] -z-1'></div>
          <h3 className='text-[1.2rem] font-bold w-[100px] leading-6 relative z-10'>Identify Partners</h3>
          <p className='text-[0.8rem] text-[#6a6a6a] lg:w-[190px] leading-4 mt-2'>Vet and select Airbnb rental agencies for partnership.</p>
        </motion.div>

        <motion.div
          className='relative mt-10'
          variants={cardVariants('down')}
          initial="hidden"
          animate={card2Controls}
          ref={card2Ref}
        >
          <div className='absolute bg-[#ff9bad] h-[30px] w-[30px] top-[-12px] left-[-10px] rounded-[50px] -z-1'></div>
          <h3 className='text-[1.2rem] font-bold w-[100px] leading-6 relative z-10'>Revenue Agreements</h3>
          <p className='text-[0.8rem] text-[#6a6a6a] lg:w-[190px] leading-4 mt-2'>Create mutually beneficial agreements with partners.</p>
        </motion.div>

        <motion.div
          className='relative mt-10'
          variants={cardVariants('up')}
          initial="hidden"
          animate={card3Controls}
          ref={card3Ref}
        >
          <div className='absolute bg-[#ff9bad] h-[30px] w-[30px] top-[-12px] left-[-10px] rounded-[50px] -z-1'></div>
          <h3 className='text-[1.2rem] font-bold w-[100px] leading-6 relative z-10'>Scoring System</h3>
          <p className='text-[0.8rem] text-[#6a6a6a] lg:w-[190px] leading-4 mt-2'>Evaluate partner performance regularly.</p>
        </motion.div>

        <motion.div
          className='relative mt-10'
          variants={cardVariants('down')}
          initial="hidden"
          animate={card4Controls}
          ref={card4Ref}
        >
          <div className='absolute bg-[#ff9bad] h-[30px] w-[30px] top-[-12px] left-[-10px] rounded-[50px] -z-1'></div>
          <h3 className='text-[1.2rem] font-bold w-[100px] leading-6 relative z-10'>Optimize Partnerships</h3>
          <p className='text-[0.8rem] text-[#6a6a6a] lg:w-[190px] leading-4 mt-2'>Continuously review and improve partnership strategies.</p>
        </motion.div>
      </div>
    </div>
    </Container>
    </div>
  );
}

export default Strategy;
