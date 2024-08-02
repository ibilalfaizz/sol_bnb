import React from "react";
import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slider() {
  // Define animation variants for the parent container and cards
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations of child elements
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const options = {
    items: 5,
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
        margin: 20,
      },
      500: {
        items: 1,
        margin: 20,
        dots: true,
      },
      724: {
        items: 3,
      },
      1100: {
        items: 5,
      },
    },
  };

  return (
    <div className="mt-6 lg:mt-0 px-4 lg:px-6 py-4 lg:py-6"> {/* Adjusted padding */}
      <motion.div
        className="owl-theme w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <OwlCarousel className="owl-theme w-full" {...options}>
          <motion.div
            className="item"
            variants={cardVariants}
          >
            <div className="border lg:border-0 rounded-[18px] lg:rounded-0 p-4 lg:p-6"> {/* Adjusted padding */}
              <h3 className="text-[1.5rem] leading-[1.8rem]">
                Solana Blockchain
              </h3>
              <p className="text-[0.875rem] text-[#6a6a6a] mt-2">
                Utilizing Solana for fast, low-cost transactions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="item"
            variants={cardVariants}
          >
            <div className="border lg:border-0 rounded-[18px] lg:rounded-0 p-4 lg:p-6"> {/* Adjusted padding */}
              <h3 className="text-[1.5rem] leading-[1.8rem]">
                Agency Partnerships
              </h3>
              <p className="text-[0.875rem] text-[#6a6a6a] mt-2">
                Collaborate with multiple Airbnb rental agencies globally.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="item"
            variants={cardVariants}
          >
            <div className="border lg:border-0 rounded-[18px] lg:rounded-0 p-4 lg:p-6"> {/* Adjusted padding */}
              <h3 className="text-[1.5rem] leading-[1.8rem]">
                Revenue Sharing
              </h3>
              <p className="text-[0.875rem] text-[#6a6a6a] mt-2">
                Distribute a portion of partnership revenues to token holders in SOL.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="item"
            variants={cardVariants}
          >
            <div className="border lg:border-0 rounded-[18px] lg:rounded-0 p-4 lg:p-6"> {/* Adjusted padding */}
              <h3 className="text-[1.5rem] leading-[1.8rem]">
                Staking Rewards
              </h3>
              <p className="text-[0.875rem] text-[#6a6a6a] mt-2">
                Additional benefits for long-term token stakers.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="item"
            variants={cardVariants}
          >
            <div className="border lg:border-0 rounded-[18px] lg:rounded-0 p-4 lg:p-6"> {/* Adjusted padding */}
              <h3 className="text-[1.5rem] leading-[1.8rem]">
                NFT Integration
              </h3>
              <p className="text-[0.875rem] text-[#6a6a6a] mt-2">
                NFTs representing partnership tiers or special access to premium listings.
              </p>
            </div>
          </motion.div>
        </OwlCarousel>
      </motion.div>
    </div>
  );
}

export default Slider;
