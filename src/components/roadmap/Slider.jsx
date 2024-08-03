import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slider() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to control when the animation should start
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const options = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: false,
    dots: false,
    margin: 40,

    responsive: {
      0: {
        items: 1,
        dots: false,
        center: true,
      },
      500: {
        items: 1,
        margin: 0,
        dots: false,
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
    <motion.div ref={ref} className="mt-6 lg:mt-0">
      <OwlCarousel className="owl-theme mx-auto" {...options}>
        <motion.div
          className="item w-[100%] relative h-auto"
          initial="hidden"
          animate={controls}
          variants={animationVariants}
        >
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white z-[10000] text-[#ff385c] font-bold text-center w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q1
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Token launch and initial agency partnerships.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="item w-[100%]"
          initial="hidden"
          animate={controls}
          variants={animationVariants}
        >
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white text-[#ff385c] font-bold text-center relative w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q2
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Platform development and beta testing.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="item w-[100%]"
          initial="hidden"
          animate={controls}
          variants={animationVariants}
        >
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white text-[#ff385c] font-bold text-center relative w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q3
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Full platform launch and expansion of agency network.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="item w-[100%]"
          initial="hidden"
          animate={controls}
          variants={animationVariants}
        >
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white text-[#ff385c] font-bold text-center relative w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q4
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Introduction of NFT features and additional partner services.
            </p>
          </div>
        </motion.div>
      </OwlCarousel>
    </motion.div>
  );
}

export default Slider;
