import React, { useEffect } from "react";
import styles from "../../styles/Share.module.css";

const share = () => {
  const onShareBtn = () => {
    const title = process.browser ? window.document.title : null;
    const url = process.browser ? window.document.location.href : null;

    if (navigator.share) {
      navigator
        .share({
          title: `${title}`,
          url: `${url}`,
        })
        .then(() => {
          alert("thanks for Sharing");
        });
    } else {
      console.log("null");
    }
  };
  return (
    <div className={styles.container}>
      <h1> Some Content </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
      </p>

      <button onClick={onShareBtn} className={styles.btn}>
        share
      </button>
    </div>
  );
};

export default share;
