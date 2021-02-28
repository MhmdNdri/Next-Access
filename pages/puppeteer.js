import React from "react";
import Styles from "../styles/Puppeteer.module.css";
const Puppeteer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.box}>
        <h1 className={Styles.h1}>سلام و درود</h1>
        <h2 className={Styles.h2}> تست فونت سایت و همچنین استایل </h2>
        <p className={Styles.p}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته،
        </p>
      </div>
    </div>
  );
};

export default Puppeteer;
