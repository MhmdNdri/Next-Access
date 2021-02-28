import React from "react";
import ReactSwipe from "react-swipe";
import Styles from "../styles/Swipe.module.css";
const reactSwipe = () => {
  let reactSwipeEl;
  return (
    <div>
      <div className={Styles.container}>
        <ReactSwipe
          className={Styles.carousel}
          swipeOptions={{
            startSlide: 0,
            continuous: false,
            speed: 900,
            stopPropagation: true,
            widthOfSiblingSlidePreview: 40,
          }}
          ref={(el) => (reactSwipeEl = el)}
        >
          <div className={Styles.panes}>PANE 1</div>
          <div className={Styles.panes}>PANE 2</div>
          <div className={Styles.panes}>PANE 3</div>
          <div className={Styles.panes}>PANE 4</div>
          <div className={Styles.panes}>PANE 5</div>
        </ReactSwipe>
        <button className={Styles.btn} onClick={() => reactSwipeEl.next()}>
          Next
        </button>
        <button className={Styles.btn} onClick={() => reactSwipeEl.prev()}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default reactSwipe;
