import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import card1 from "../../assets/icons/utitlity-1.png";
import card2 from "../../assets/icons/utility-2.png";
import card3 from "../../assets/icons/utility-3.png";
import card4 from "../../assets/icons/utility-4.png";

function Slider() {
    const options = {
        loop: false,
        autoplay: false,
        autoplayTimeout: 4000,
        animateOut: "slideOutUp",
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 1,
                margin: 0,
                dots: true,
            },
            724: {
                items: 2,
            },
            1100: {
                items: 4,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.4, delayChildren: 0.2 },
        },
    };

    const useScrollAnimation = () => {
        const controls = useAnimation();
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        });

        React.useEffect(() => {
            if (inView) {
                controls.start('visible');
            }
        }, [inView, controls]);

        return [ref, controls];
    };

    const [containerRef, containerControls] = useScrollAnimation();

    return (
        <div className="mt-6 lg:mt-0">
            <motion.div
                ref={containerRef}
                initial="hidden"
                animate={containerControls}
                variants={containerVariants}
            >
                <OwlCarousel className="owl-theme mx-auto" {...options}>
                    <motion.div
                        className="item w-[100%]"
                        variants={cardVariants}
                    >
                        <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto pt-10 pb-8">
                            <div className='mb-6'>
                                <img className='h-[110px] w-full max-w-[140px] mx-auto' src={card1} alt='' />
                            </div>
                            <h3 className="text-[1rem] w-[10px] leading-[1.2rem]">
                                Passive Income
                            </h3>
                            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[165px]">
                                Earn a share of partnership revenues based on token holdings.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="item w-[100%]"
                        variants={cardVariants}
                    >
                        <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
                            <div className='mb-6'>
                                <img className='h-[110px] w-full max-w-[140px] mx-auto' src={card2} alt='' />
                            </div>
                            <h3 className="text-[1rem] w-[10px] leading-[1.2rem]">
                                Booking Discounts
                            </h3>
                            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[165px]">
                                Get reduced rates when booking stays through partner agencies.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="item w-[100%]"
                        variants={cardVariants}
                    >
                        <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
                            <div className='mb-6'>
                                <img className='h-[110px] w-full max-w-[140px] mx-auto' src={card3} alt='' />
                            </div>
                            <h3 className="text-[1rem] w-[100px] leading-[1.2rem]">
                                Exclusive Travel Perks
                            </h3>
                            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[180px]">
                                Access exclusive travel perks and premium listings.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="item w-[100%]"
                        variants={cardVariants}
                    >
                        <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
                            <div className='mb-6'>
                                <img className='h-[110px] w-full max-w-[140px] mx-auto' src={card4} alt='' />
                            </div>
                            <h3 className="text-[1rem] w-[10px] leading-[1.2rem]">
                                Staking Rewards
                            </h3>
                            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[140px]">
                                Stake tokens for additional rewards.
                            </p>
                        </div>
                    </motion.div>
                </OwlCarousel>
            </motion.div>
        </div>
    );
}

export default Slider;
