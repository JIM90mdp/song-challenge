import React, { useState, useContext, useEffect } from "react";
import ChallengeCard from "../challengeCard/challengeCard";
import { motion } from "framer-motion";
import { useLocalStorage } from "../localStorage/useLocalStorage";

const HomePage = () => {
  const [textButton, setTextButton] = useState("Generate Challenge");

  const [challenge, setChallenge] = useLocalStorage("songChallenge");

  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    fetch("https://song-challenge.fly.dev/api/song-challenge/", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((challenge) => {
        setChallenge(challenge.content);
        setLoading(false);
      });
    // if (isLoading) return <p>Loading...</p>;
    // if (!challenge) return <p>Click on </p>
    setTextButton("Generate another song idea");
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[90vh] box-content">
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
        <p id="text" className="p-5">
          Click the button below to generate a random song challenge.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <button
          onClick={handleClick}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          {textButton}
        </button>
      </motion.div>

      {/* CHALLENGE CARD */}
      <ChallengeCard songChallenge={challenge} />
    </div>
  );
};

export default HomePage;
