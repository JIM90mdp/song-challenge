import React, { useState } from "react";
import ChallengeCard from "../challengeCard/challengeCard";
import { motion } from "framer-motion";
const HomePage = ({ data }) => {
  // console.log("data: ", data)

  const [textButton, setTextButton] = useState("Generar Challenge");
  const [content, setContent] = useState("");

  const handleClick = () => {
    const randomElement = data[Math.floor(Math.random() * data.length)];
    setContent(randomElement);

    // console.log("randomElement: ", randomElement)

    textButton === "Generate song idea"
      ? setTextButton("Generate another song idea")
      : setTextButton("Generate another song idea");
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
          Click the button below to generate another random song idea.
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={handleClick}
        >
          {textButton}
        </button>
      </motion.div>

      <ChallengeCard data={content} />
    </div>
  );
};

export default HomePage;