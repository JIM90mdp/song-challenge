import React, { useState } from "react";

import { motion } from "framer-motion";
import { useLocalStorage } from "../../components/localStorage/useLocalStorage";
import ReactLoading from "react-loading";
import ChallengeCard from "@component/components/challengeCard/challengeCard";
import Link from "next/link";
import Hero from "@component/components/hero/hero";

const HomePage = () => {
  const [textButton, setTextButton] = useState("Generate Challenge");

  const [challenge, setChallenge] = useLocalStorage("songChallenge");

  const [isLoading, setLoading] = useState(false);

  const pulseAnimation = {
    scale: [1, 1.3, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  const handleClick = () => {
    setLoading(true);
    fetch("https://song-challenge.fly.dev/api/song-challenge/", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((challenge) => {
        console.log("fetch: ", challenge);
        setChallenge(challenge);
        setLoading(false);
      });
    if (isLoading)
      return (
        <ReactLoading type={"bars"} color={"#2c3e50"} height={50} width={50} />
      );
    if (!challenge) return <p>Click on </p>;
    setTextButton("Generate another song idea");
  };

  return (
    <div className="home">
      <div className="home-container">
        <Hero />

        <div className="challenge-container">
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
            <p id="text">
              Click the button below to generate a random song challenge.
            </p>
          </motion.div>

          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={pulseAnimation}
          >
            <Link href="/home" className="navbar_link" onClick={handleClick}>
              {textButton}
            </Link>
          </motion.button>

          {isLoading ? (
            <div>
              <ReactLoading
                type={"bars"}
                color={"#2c3e50"}
                height={50}
                width={50}
              />
            </div>
          ) : (
            <ChallengeCard songChallenge={challenge} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
