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

  const splitChallenge = songChallenge.content.split(".");
  const challengeUsing = splitChallenge[1].split(",");
  console.log("songChallenge.content: ", songChallenge.content);
  console.log("challengeUsing: ", challengeUsing);

  // const items = [];

  // for (const clave in songChallenge) {
  //   if (clave.endsWith("_name")) {
  //     items.push(songChallenge[clave]);
  //   }
  // }

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      id="challengeCard"
      className="challengeCard"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={menuVariants}
    >
      <h1 key={songChallenge}>{splitChallenge[0]}</h1>

      {challengeUsing.map((u) => (
        <motion.h2
        
          className="using"
          variants={menuItemVariants}
          styles={{ marginBottom: "10px" }}
        >
          {u}{" "}
        </motion.h2>
      ))}

      <motion.div
        className="img-container"
        variants={menuVariants}
        initial="hidden"
        animate={"visible"}
      >
        {Object.entries(values).map(([key, value], index) => {
          const randomElement = getRandomElementFromArray(images);
          const divStyle = {
            backgroundImage: `url(${randomElement})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          };
          return (
            <motion.button
              key={index}
              style={divStyle}
              className="image-value"
              variants={menuItemVariants}
              styles={{ marginBottom: "10px" }}
            >
              <h1>{key}</h1>
              <p> {value}</p>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ChallengeCard;
