import React from "react";
import "./loderSpinner.css";

const loderSpinner = () => {
  return (
    <div class="pl">
      <div class="pl__outer-ring"></div>
      <div class="pl__inner-ring"></div>
      <div class="pl__track-cover"></div>
      <div class="pl__ball">
        <div class="pl__ball-texture"></div>
        <div class="pl__ball-outer-shadow"></div>
        <div class="pl__ball-inner-shadow"></div>
        <div class="pl__ball-side-shadows"></div>
      </div>
    </div>
  );
};

export default loderSpinner;
