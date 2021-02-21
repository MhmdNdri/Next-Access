import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Location.module.css";
import { motion } from "framer-motion";
import fetch from "node-fetch";

const Location = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const getUserLocationDetails = () => {
    if (navigator.geolocation) {
      const location = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={getUserLocationDetails}>
        Show My Location Details
      </button>
      {latitude && longitude && (
        <ul>
          <li className={styles.items}>
            Latitude & Longitude: {`( ${latitude} & ${longitude} )`}
          </li>
        </ul>
      )}

      <Link href="/">
        <a className={styles.backToHome}> &#8592; Back To Home Page</a>
      </Link>
    </div>
  );
};

// export async function getServerSideProps() {

//     let response = await fetch("https://geolocation-db.com/json/c0593a60-4159-11eb-80cd-db15f946225f")
//     let data = await response.json()

//     return {
//         props: {
//             data
//         }
//     }
// }

export default Location;
