import React, { useState } from "react";
import Styles from "../styles/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

const swiper = () => {
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          className={Styles.image}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <div className={Styles.container}>
      <Swiper tag="section" Id="main" navigation pagination>
        {slides}
      </Swiper>
    </div>
  );
};

export default swiper;
