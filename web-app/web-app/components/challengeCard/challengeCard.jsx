import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppContext from "../context/appContext";

const ChallengeCard = () => {
  const context = useContext(AppContext);

  const [color, setColor] = useState("bg-slate-400");

  // console.log("data from challengeCard: ", context.songContext);

  const handleState = () => {
    color === "bg-slate-400"
      ? setColor("bg-slate-300")
      : setColor("bg-slate-400");
  };

  const style = context.songContext
    ? `${color} shadow-drop-2-center relative top-[100px] p-5 text-xl shadow-drop-2-center`
    : ``;

  useEffect(() => {
    handleState();
  }, [context.songContext]);

  return (
    context.songContext.content && (
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
        {/* CHALLENGE CONTENT */}
        {context.songContext.content && (
          <div id="challengeCard" className={style}>
            <h1 key={context.songContext.id}>{context.songContext.content}</h1>
          </div>
        )}
      </motion.div>
    )
  );
};

export default ChallengeCard;
