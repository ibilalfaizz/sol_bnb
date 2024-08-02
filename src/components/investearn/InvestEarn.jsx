import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function InvestEarn() {
  // Define animation variants with sequential delays
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.6, // Sequential delay for each card
        duration: 1, // Duration of the animation
        ease: "easeOut",
      },
    }),
  };

  // Hook for in-view detection
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="lg:px-[8rem] pt-[2rem] bg-[#f7f7f7] w-full" ref={ref}>
      <div className="flex-col lg:flex-row lg:flex xl:flex justify-between lg:gap-8 mt-[6rem] pb-[4rem] mx-4">
        <motion.div
          className="bg-white border rounded-[16px] pt-[2.2rem] pb-[1.6rem] px-[2rem] relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={0} // Pass index as custom prop
        >
          <span className="absolute top-[-1rem] bg-[#ff385c] text-[white] w-[45px] h-[45px] flex justify-center items-center rounded-[14px] border-[4px] border-[#f7f7f7] left-[-1rem]">
            1.
          </span>
          <h3 className="text-[1.2rem] font-bold">
            Tokenization of Partnerships
          </h3>
          <p className="mt-3 text-[#6a6a6a] text-sm">
            SolBnB collaborates with top-tier Airbnb rental agencies globally.
            Each token represents a share in the revenue generated from these
            partnerships.
          </p>
        </motion.div>

        <motion.div
          className="bg-white border rounded-[16px] pt-[2.2rem] pb-[1.6rem] px-[2rem] relative my-8 lg:my-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={1} // Pass index as custom prop
        >
          <span className="absolute top-[-1rem] bg-[#ff385c] text-[white] w-[45px] h-[45px] flex justify-center items-center rounded-[14px] border-[4px] border-[#f7f7f7] left-[-1rem]">
            2.
          </span>
          <h3 className="text-[1.2rem] font-bold">
            Tokenization of Partnerships
          </h3>
          <p className="mt-3 text-[#6a6a6a] text-sm">
            SolBnB collaborates with top-tier Airbnb rental agencies globally.
            Each token represents a share in the revenue generated from these
            partnerships.
          </p>
        </motion.div>

        <motion.div
          className="bg-white border rounded-[16px] pt-[2.2rem] pb-[1.6rem] px-[2rem] relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={2} // Pass index as custom prop
        >
          <span className="absolute top-[-1rem] bg-[#ff385c] text-[white] w-[45px] h-[45px] flex justify-center items-center rounded-[14px] border-[4px] border-[#f7f7f7] left-[-1rem]">
            3.
          </span>
          <h3 className="text-[1.2rem] font-bold">
            Tokenization of Partnerships
          </h3>
          <p className="mt-3 text-[#6a6a6a] text-sm">
            SolBnB collaborates with top-tier Airbnb rental agencies globally.
            Each token represents a share in the revenue generated from these
            partnerships.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default InvestEarn;
