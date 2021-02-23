import React, { useEffect, useState } from "react";
import styles from "../styles/Images.module.css";
import axios from "axios";
import Image from "next/image";
const images = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=10")
      .then((response) => {
        setImages(response.data);
      });
  }, []);
  console.log(images);
  return (
    <div className={styles.container}>
      {images.map((data) => {
        return (
          <div className={styles.image} key={data.id}>
            <Image
              className={styles.nextImage}
              src={data.download_url}
              alt={data.author}
              layout="responsive"
              width={700}
              height={500}
            />
          </div>
        );
      })}
    </div>
  );
};

export default images;
