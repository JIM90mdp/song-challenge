import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

const ChallengeCard = ({ songChallenge }) => {
  const images = [image1, image2, image3, image4, image5];

  const values = {
    Genre: songChallenge.genre_name,
    Harmony: songChallenge.harmony_name,
    Melody: songChallenge.melody_name,
    Bass: songChallenge.bass_name,
    Percussion: songChallenge.percussion_name,
    Solo: songChallenge.solo_name,
    Tempo: songChallenge.tempo_name + " bpm",
  };

  function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }

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
      <div id="challengeCard" className="challengeCard">
        <h1 key={songChallenge}>{songChallenge.content}</h1>
        <div className="img-container">
          {Object.entries(values).map(([key, value], index) => {
            const randomElement = getRandomElementFromArray(images);
            const divStyle = {
              backgroundImage: `url(${randomElement})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            };
            return (
              <div key={index} style={divStyle} className="image-value">
                <h1>{key}</h1>
                <p> {value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
