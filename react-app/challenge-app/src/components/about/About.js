import React from "react";
import Hero from "../hero/hero";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <Hero />
        <div className="text">
          <p>
            Song-Challenge is a musician-focused application that tests their
            compositional skills with random prompts.{" "}
          </p>
          <p>
            It provides a creative platform for musicians to showcase their
            abilities by generating unique challenges and encouraging them to
            compose music based on those prompts.
          </p>{" "}
          <p>
            With Song-Challenge, musicians can enhance their creativity, explore
            new musical territories, and share their compositions.{" "}
          </p>{" "}
          <p>
            Join the Song-Challenge community today, share your productions on
            your social media with the hashtag #song-challenge, and let your
            musical talent be heard worldwide.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
