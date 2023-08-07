import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <h1>FREE</h1>
      <div className="song-line">Song</div>
      <div className="challenge-line">Challenge</div>
      <div className="action">
        <h3>Generate Random</h3>
        <span>
          <p className="orange-background">Song Challenge</p>
          <p className="prompt">Prompt</p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
