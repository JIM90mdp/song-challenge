import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppContext from "../localStorage/useLocalStorage";

const ChallengeCard = ({songChallenge}) => {
  const [color, setColor] = useState("bg-slate-400");

  const handleState = () => {
    color === "bg-slate-400"
      ? setColor("bg-slate-300")
      : setColor("bg-slate-400");
  };

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
      <div id="challengeCard" className="">
        <h1 key={songChallenge}>{songChallenge}</h1>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
