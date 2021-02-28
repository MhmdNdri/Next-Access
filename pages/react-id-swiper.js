import React from "react";
import Swiper from "react-id-swiper";
const reactIdSwiper = () => {
  const params = {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <>
      <Swiper {...params}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    </>
  );
};

export default reactIdSwiper;
