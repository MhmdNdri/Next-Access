import React, { useState, useEffect } from "react";
import styles from "../styles/BgSync.module.css";
import axios from "axios";

const BgSync = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      setData(response.data);
    });
  }, []);

  const showContents = data.map((e) => {
    return (
      <div className={styles.card} id={e.id}>
        <h3>
          First Name : <span className={styles.detailes}>{e.name}</span>
        </h3>
        <h3>
          Family Name: <span className={styles.detailes}>{e.family}</span>
        </h3>
        <h3>
          Age : <span className={styles.details}>{e.age}</span>
        </h3>
      </div>
    );
  });
  return <div className={styles.container}>{showContents}</div>;
};

export default BgSync;
