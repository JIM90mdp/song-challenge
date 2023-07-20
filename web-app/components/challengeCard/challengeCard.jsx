import React from "react";
import { motion } from "framer-motion";


const ChallengeCard = ({songChallenge}) => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        duration: 4,
      }}
    >
      <div id="challengeCard" className="">
      {/* <div id="challengeCard" className="p-8 text-center text-base"> */}
        <h1 key={songChallenge}>{songChallenge}</h1>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
