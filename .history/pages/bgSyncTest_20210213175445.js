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

  const showContents = data.map((data) => {
    <div id={data.id}>
      <h2>
        First Name : <span>{data.name}</span>
      </h2>
      <h2>
        Family Name: <span>{data.family}</span>
      </h2>
      <h2>
        Age : <span>{data.age}</span>
      </h2>
    </div>;
  });

  console.log(showContents);

  return <div className={styles.container}>{showContents}</div>;
};

export default BgSync;
