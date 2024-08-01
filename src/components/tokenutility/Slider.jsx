import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { motion } from "framer-motion";
import card1 from "../../assets/icons/utitlity-1.png";
import card2 from "../../assets/icons/utility-2.png";
import card3 from "../../assets/icons/utility-3.png";
import card4 from "../../assets/icons/utility-4.png";

function Slider() {
  // Define animation variants with a clear pop-up effect
  const cardVariants = {
    hidden: { opacity: 0, y: 30 }, // Start with card below and transparent
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Adjust delay for sequential animation
        duration: 0.6, // Adjust duration for a clear pop-up effect
        ease: "easeOut",
      },
    }),
  };

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

  return (
    <div className="mt-6 lg:mt-0">
      <OwlCarousel className="owl-theme mx-auto" {...options}>
        <motion.div
          className="item w-[100%]"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          custom={0} // Pass index as custom prop
        >
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto ms-0 pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card1}
                alt=""
              />
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
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          custom={1} // Pass index as custom prop
        >
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card2}
                alt=""
              />
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
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          custom={2} // Pass index as custom prop
        >
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card3}
                alt=""
              />
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
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          custom={3} // Pass index as custom prop
        >
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card4}
                alt=""
              />
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
    </div>
  );
}

export default Slider;
