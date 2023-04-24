import React from "react";
import { motion } from "framer-motion";

const ChallengeCard = ({ data }) => {
  console.log("data from challengeCard: ", data);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="relative top-[100px] p-5 text-xl border border-black ">
        <h1>{data.content}</h1>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
