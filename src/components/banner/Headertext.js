import React from 'react';
import { Container } from "react-bootstrap";
import { motion, useInView } from 'framer-motion';

const Headertext = () => {
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center items-center mt-10 md:mt-0 mb-20 text-[#00000]"
    >
      <Container className="mx-auto px-4 md:px-20 lg:px-28 text-center">
        <p className="text-sm md:text-base lg:text-lg">
          Welcome to SolBnB, where the worlds of blockchain and vacation rentals intersect. SolBnB leverages the power of Solana to provide you with a unique opportunity to invest in a network of vacation rentals without the hassle of direct property ownership. Earn passive income, enjoy exclusive travel perks, and be part of a revolutionary travel experience.
        </p>
      </Container>
    </motion.div>
  );
}

export default Headertext;