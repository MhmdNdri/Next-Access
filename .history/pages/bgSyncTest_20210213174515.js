import React, { useState, useEffect } from "react";
import styles from "../styles/Location.module.css";
import axios from "axios";

const BgSync = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);

  return <div className={styles.container}>Hello</div>;
};

export default BgSync;
