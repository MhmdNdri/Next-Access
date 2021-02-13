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

  const showContents = data.map((e) => {
    return (
      <div id={e.id}>
        <h2>
          First Name : <span>{data.name}</span>
        </h2>
        <h2>
          Family Name: <span>{e.family}</span>
        </h2>
        <h2>
          Age : <span>{e.age}</span>
        </h2>
      </div>
    );
  });
  return <div className={styles.container}>{showContents}</div>;
};

export default BgSync;
