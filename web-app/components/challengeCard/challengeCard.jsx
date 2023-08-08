import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

const ChallengeCard = ({ songChallenge }) => {
  const images = [image1, image2, image3, image4, image5];
  const values = [
    songChallenge.genre_name,
    songChallenge.harmony_name,
    songChallenge.melody_name,
    songChallenge.bass_name,
    songChallenge.percussion_name,
    songChallenge.solo_name,
    songChallenge.tempo_name,
  ];
  const items = [];

  for (const clave in songChallenge) {
    if (clave.endsWith("_name")) {
      items.push(songChallenge[clave]);
    }
  }

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
        <h1 key={songChallenge}>{songChallenge.content}</h1>
        {/* <div>
          <spam>Genre: {songChallenge.genre_name}</spam>
          <spam>Harmony: {songChallenge.harmony_name}</spam>
          <spam>Melody: {songChallenge.melody_name}</spam>
          <spam>Bass: {songChallenge.bass_name}</spam>
          <spam>Percussion: {songChallenge.percussion_name}</spam>
          <spam>Solo: {songChallenge.solo_name}</spam>
          <spam>Tempo: {songChallenge.tempo_name}</spam>
        </div> */}

        <div>
        <img src={require("../../assets/1.png")}/>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
