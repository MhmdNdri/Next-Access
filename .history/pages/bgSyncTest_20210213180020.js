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

//   const showContents = data.map((e) => {
//     <div id={e.id}>
//       <h2>
//         First Name : <span>{e.name}</span>
//       </h2>
//       <h2>
//         Family Name: <span>{e.family}</span>
//       </h2>
//       <h2>
//         Age : <span>{e.age}</span>
//       </h2>
//     </div>;
//   

  console.log(showContents);

  return(
  <div className={styles.container}>

    {data.map((e) => {
    <div id={e.id}>
      <h2>
        First Name : <span>{e.name}</span>
      </h2>
      <h2>
        Family Name: <span>{e.family}</span>
      </h2>
      <h2>
        Age : <span>{e.age}</span>
      </h2>
    </div>
</div>)
};

export default BgSync;
