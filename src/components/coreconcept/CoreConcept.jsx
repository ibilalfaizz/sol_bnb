import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import icon from "../../assets/icons/conceptIcon.png";
import Slider from "../../components/coreconcept/Slider";
import {Container} from "react-bootstrap"
import "./CoreConcept.css"; // Import your CSS file

// Define animation variants for desktop and mobile
const textVariantsDesktop = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageVariantsDesktop = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const headingVariantsDesktop = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.5 } },
};

// Define mobile-specific animation variants
const textVariantsMobile = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageVariantsMobile = {
  hidden: { opacity: 0, y: -60 }, // Animate from top to bottom
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const headingVariantsMobile = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const paragraphVariantsMobile = {
  hidden: { opacity: 0, x: -100 }, // Animate from left to center
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

function CoreConcept() {
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [paragraphRef, paragraphInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Determine if the view is mobile or desktop
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="d-flex justify-content-center align-items-center m" >
    <Container className=" mx-auto">
    <div className={`core-concept-container ${isMobile ? 'mobile' : 'desktop'} lg:mx-[8rem] mt-[2rem] lg:mt-[5rem] pb-[4rem]`}>
      <div className={`core-concept-content ${isMobile ? 'mobile' : 'desktop'}`}>
        <motion.div
          className={`core-concept-image ${isMobile ? 'mobile' : 'desktop'}`}
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={isMobile ? imageVariantsMobile : imageVariantsDesktop}
        >
          <img className="w-[200px] h-[200px]" src={icon} alt="Concept Icon" />
        </motion.div>

        <motion.div
          className={`core-concept-text ${isMobile ? 'mobile' : 'desktop'}`}
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={isMobile ? textVariantsMobile : textVariantsDesktop}
        >
          <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
            Core concept
          </h3>
          <motion.p
            className={`text-[0.875rem] w-full lg:max-w-[440px] mt-4 text-center lg:text-left ${isMobile ? 'animate' : ''}`}
            ref={paragraphRef}
            initial="hidden"
            animate={paragraphInView ? "visible" : "hidden"}
            variants={isMobile ? paragraphVariantsMobile : undefined}
          >
            SolBnB is a Solana-based token project that partners with
            established Airbnb rental agencies. Token holders gain exposure to a
            network of vacation rentals, earning passive income through
            revenue-sharing agreements with partner agencies.
          </motion.p>
        </motion.div>
      </div>

      <div>
        <motion.h3
          className={`text-[#FF385C] text-center lg:text-left text-[1.75rem] font-bold mt-[2.8rem] lg:mt-[2.5rem] lg:mb-5 ${isMobile ? 'mobile' : 'desktop'}`}
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={isMobile ? headingVariantsMobile : headingVariantsDesktop}
        >
          Key features
        </motion.h3>
      </div>
      <Slider />
    </div>
    </Container>
    </div>
  );
}

export default CoreConcept;
