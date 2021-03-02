import React from "react";
import Styles from "../styles/Puppeteer.module.css";
import { jsPDF } from "jspdf";
// import puppeteer from "puppeteer";

const Puppeteer = () => {
  // (async () => {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   await page.goto("https://example.com");
  //   await page.screenshot({ path: "example.png" });

  //   await browser.close();
  // })();
  // const generatePDF = () => {
  //   var doc = new jsPDF("p", "pt");

  //   doc.text(20, 20, "This is the first title.");

  //   doc.setFont("helvetica");
  //   doc.setFontType("normal");
  //   doc.text(20, 60, "This is the second title.");

  //   doc.setFont("helvetica");
  //   doc.setFontType("normal");
  //   doc.text(20, 100, "This is the thrid title.");

  //   doc.save("demo.pdf");
  // };
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
      {/* <button onClick={generatePDF} className={Styles.btn}>
        Download PDF{" "}
      </button> */}
    </div>
  );
};

export default Puppeteer;
