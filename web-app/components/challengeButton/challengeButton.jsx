import React, { useState } from "react";

const GenerarChallengeButton = ({ data }) => {
  const [textButton, setTextButton] = useState("Generar Challenge");

  const handleClick = () => {
    textButton === "Generar Challenge"
      ? setTextButton("Generar un nuevo Challenge")
      : setTextButton("Generar Challenge");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {textButton}
    </button>
  );
};

export default GenerarChallengeButton;
