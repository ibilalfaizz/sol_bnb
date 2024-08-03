import React from 'react';
import { motion } from 'framer-motion';
import cardicon from '../../assets/icons/legalcardicon.png';

// Define animation variants for different directions
const cardVariants = {
    hidden: (direction) => ({
        opacity: 0,
        y: direction === 'down' ? -30 : 30, // Start from further away
    }),
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.0, ease: 'easeInOut' }, // Increase duration and adjust easing
    },
};

function Legal() {
    return (
        <div className="mx-4 lg:mx-[8rem] mt-[2rem] lg:mt-[5rem]">
            <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
                Legal Considerations.
            </h3>

            <div className='grid lg:flex flex-wrap xl:flex justify-start gap-8 mt-[6rem]'>

                {/* First three cards: Animate from up to down */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    custom="down"
                    className='bg-[#f7f7f7] w-full lg:max-w-[340px] border rounded-[16px] pt-[2.2rem] pb-[1.6rem] pl-[2rem] pr-[0rem] relative'
                >
                    <span className='absolute top-[-1rem] left-[-1rem] w-[45px] h-[45px]'>
                        <img src={cardicon} alt='' />
                    </span>
                    <h3 className='text-[1.2rem] font-bold'>Compliance</h3>
                    <p className='mt-3 text-[#6a6a6a] text-[14px] lg:w-[300px]'>
                        Ensure compliance with securities regulations.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    custom="down"
                    className='bg-[#f7f7f7] w-full lg:max-w-[340px] border rounded-[16px] pt-[2.2rem] pb-[1.6rem] pl-[2rem] pr-[1rem] relative'
                >
                    <span className='absolute top-[-1rem] left-[-1rem] w-[45px] h-[45px]'>
                        <img src={cardicon} alt='' />
                    </span>
                    <h3 className='text-[1.2rem] font-bold'>KYC/AML Procedures</h3>
                    <p className='mt-3 text-[#6a6a6a] text-[14px] lg:w-[300px]'>
                        Implement Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    custom="down"
                    className='bg-[#f7f7f7] w-full lg:max-w-[340px] border rounded-[16px] pt-[2.2rem] pb-[1.6rem] pl-[2rem] pr-[1rem] relative'
                >
                    <span className='absolute top-[-1rem] left-[-1rem] w-[45px] h-[45px]'>
                        <img src={cardicon} alt='' />
                    </span>
                    <h3 className='text-[1.2rem] font-bold'>Smart Contract Audits</h3>
                    <p className='mt-3 text-[#6a6a6a] text-[14px] lg:w-[300px]'>
                        Conduct thorough audits of smart contracts.
                    </p>
                </motion.div>

                {/* Last two cards: Animate from down to up */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    custom="up"
                    className='bg-[#f7f7f7] w-full lg:max-w-[340px] border rounded-[16px] pt-[2.2rem] pb-[1.6rem] pl-[2rem] pr-[0rem] relative'
                >
                    <span className='absolute top-[-1rem] left-[-1rem] w-[45px] h-[45px]'>
                        <img src={cardicon} alt='' />
                    </span>
                    <h3 className='text-[1.2rem] font-bold'>Terms of Service</h3>
                    <p className='mt-3 text-[#6a6a6a] text-[14px] lg:w-[300px]'>
                        Clear terms of service and token holder agreements.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    custom="up"
                    className='bg-[#f7f7f7] w-full lg:max-w-[340px] border rounded-[16px] pt-[2.2rem] pb-[1.6rem] pl-[2rem] pr-[0rem] relative'
                >
                    <span className='absolute top-[-1rem] left-[-1rem] w-[45px] h-[45px]'>
                        <img src={cardicon} alt='' />
                    </span>
                    <h3 className='text-[1.2rem] font-bold'>Partnership Agreements</h3>
                    <p className='mt-3 text-[#6a6a6a] text-[14px] lg:w-[300px]'>
                        Establish robust agreements with rental agencies.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}

export default Legal;
