import React, { useEffect, useState } from "react";
import styles from "../styles/Images.module.css";
import axios from "axios";
const images = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const data = axios.get("https://picsum.photos/v2/list?page=2&limit=100");
  }, []);
  return <div>Images</div>;
};

export default images;
