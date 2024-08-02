import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from './Slider';

function TokenUtility() {
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    // Define animation variants for sliding in from left to right
    const containerVariants = {
        hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Slide into view
    };

    return (
        <motion.div
            ref={ref}
            className='lg:px-[8rem] mt-[2rem] lg:mt-[5rem]'
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left leading-8 mb-4">
                Token Utility
            </h3>
            
            <div>
                <Slider />
            </div>
        </motion.div>
    );
}

export default TokenUtility;
