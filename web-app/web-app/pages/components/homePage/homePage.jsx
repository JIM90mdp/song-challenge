import React, { useState } from "react";

// import GenerarChallengeButton from "../challengeButton/challengeButton";
import ChallengeCard from "../challengeCard/challengeCard";

const HomePage = ({ data }) => {
  // console.log("data: ", data)
  
  const [textButton, setTextButton] = useState("Generar Challenge");
  const [content, setContent] = useState("");

  const handleClick = () => {

    const randomElement = data[Math.floor(Math.random() * data.length)];
    setContent(randomElement);

    // console.log("randomElement: ", randomElement)

    textButton === "Generar Challenge"
      ? setTextButton("Generar un nuevo Challenge")
      : setTextButton("Generar Challenge");
  };

  return (
    <div className="relative flex flex-col  items-center justify-evenly h-screen ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        {textButton}
      </button>
      <ChallengeCard data={content} className="pt-5"/>
    </div>
  );
};

export default HomePage;
