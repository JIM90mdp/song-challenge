import React from "react";
import { motion } from "framer-motion";
import Hero from "../hero/hero";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/home" className="navbar_link" activeClassName="active">
            Start
          </NavLink>
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
