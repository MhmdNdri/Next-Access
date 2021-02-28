import React, { useState } from "react";
import Styles from "../styles/Swipe.module.css";
import Swipeable from "react-swipeable";
const swipe = () => {
  const [firstXdirection, setFirstXdirections] = useState(0);
  const [firstYdirection, setFirstYdirections] = useState(0);
  const [endXdirection, setEndXdirection] = useState(0);
  const [endYdirection, setEndYdirection] = useState(0);
  const handleTouchStart = (event) => {
    setFirstXdirections(event.touches[0].clientX);
    setFirstYdirections(event.touches[0].clientY);
  };
  const handleDirectionTouch = (event) => {
    setEndXdirection(event.touches[0].clientX);
    setEndYdirection(event.touches[0].clientY);
  };
  if (endXdirection > firstXdirection && endYdirection > firstYdirection) {
    console.log("You swiped to Right and down");
  } else if (
    endXdirection > firstXdirection &&
    endYdirection < firstYdirection
  ) {
    console.log("you swiped to Right and Up");
  } else if (
    endXdirection < firstXdirection &&
    endYdirection > firstYdirection
  ) {
    console.log("you swiped to left and down");
  } else {
    console.log("you swiped to left and up");
  }
  console.log(firstXdirection, firstYdirection);
  console.log(endXdirection, endYdirection);
  return (
    <div className={Styles.container}>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleDirectionTouch}
        className={Styles.swipeBox}
      >
        <div className={Styles.swipeLeft}>Swipe Left</div>
        <div className={Styles.swipeRight}>Swipe Right</div>
        <div className={Styles.swipeDown}>Swipe Down</div>
        <div className={Styles.swipeUp}>Swipe Up</div>
      </div>
    </div>
  );
};

export default swipe;
