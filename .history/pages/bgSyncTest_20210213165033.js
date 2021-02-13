import React, { useState, useEffect } from "react";
import styles from "../styles/Location.module.css";
import axios from "axios";

const BgSync = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = axios.get("https://localhost:3001/profile");
  });
  return <div className={styles.container}>Hello</div>;
};

export default BgSync;
