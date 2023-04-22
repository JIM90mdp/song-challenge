import React from "react";

const ChallengeCard = ({ data }) => {
console.log("data from challengeCard: ", data)
  return (
    <div>
      <h1>{data.content}</h1>
    </div>
  );
};

export default ChallengeCard;
