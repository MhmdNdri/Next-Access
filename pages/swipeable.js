import React from "react";
import { useSwipeable } from "react-swipeable";
import Styles from "../styles/Swipe.module.css";
const swipeable = () => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
  });
  return (
    <div className={Styles.container} {...handlers}>
      {" "}
      You can swipe here{" "}
    </div>
  );
};

export default swipeable;
