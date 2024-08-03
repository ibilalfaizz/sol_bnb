import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Slider() {
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

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 },
      }));
    }
  }, [controls, inView]);

  const items = [
    {
      title: "Solana Blockchain",
      description: "Utilizing Solana for fast, low-cost transactions.",
      width: "140px",
    },
    {
      title: "Agency Partnerships",
      description: "Collaborate with multiple Airbnb rental agencies globally.",
      width: "145px",
    },
    {
      title: "Revenue Sharing",
      description: "Distribute a portion of partnership revenues to token holders in SOL.",
      width: "160px",
    },
    {
      title: "Staking Rewards",
      description: "Additional benefits for long-term token stakers.",
      width: "140px",
    },
    {
      title: "NFT Integration",
      description: "NFTs representing partnership tiers or special access to premium listings.",
      width: "200px",
    },
  ];

  return (
    <div className="mt-6 lg:mt-0" ref={ref}>
      <OwlCarousel className="owl-theme w-full" {...options}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="item px-4 py-6"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            custom={index}
          >
            <div className="border lg:border-0 rounded-[18px] lg:rounded-0 mx-4 lg:mx-0 pb-6 pl-4 lg:p-6 pt-6">
              <h3 className="text-[1.5rem] leading-[1.8rem] mb-4">{item.title}</h3>
              <p className="text-[0.875rem] text-[#6a6a6a] mt-1 lg:w-[140px]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Slider;
