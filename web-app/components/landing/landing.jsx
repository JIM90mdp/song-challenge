import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "../hero/hero";

const Landing = () => {
  const pulseAnimation = {
    scale: [1, 1.3, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <div className="landing">
      <div className="landing-container">
        <Hero />

        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={pulseAnimation}
        >
          <Link href="/home" className="navbar_link">
            Start
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
