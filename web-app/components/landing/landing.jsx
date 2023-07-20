import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
  );
};

export default Landing;
