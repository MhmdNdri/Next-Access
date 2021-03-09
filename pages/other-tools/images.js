import React, { useEffect, useState } from "react";
import styles from "../../styles/Images.module.css";
import axios from "axios";
import Image from "next/image";
import Spinner from "../../components/spinner";
const images = () => {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(null);

  //
  const loadingImgStyle = () => {
    // display: loaded ? "none" : undefined,
    if (loaded === true) {
      return "none";
    } else {
      return undefined;
    }
  };

  const displayImgStyle = () => {
    // display: loaded ? undefined : "none",
    if (loaded === true) {
      return undefined;
    } else {
      return "none";
    }
  };

  //
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=10")
      .then((response) => {
        setImages(response.data);
      });
  }, []);
  console.log(images);
  const handleLoad = (event) => {
    console.log("hey");
  };
  return (
    <div className={styles.container}>
      {images.map((data) => {
        return (
          <div className={styles.image} key={data.id}>
            <Image
              src={Spinner}
              style={loadingImgStyle}
              layout="fixed"
              width={70}
              height={50}
            />
            <Image
              className={styles.nextImage}
              src={data.download_url}
              alt={data.author}
              //   onLoad={handleLoad}
              layout="responsive"
              width={700}
              height={500}
              //
              style={displayImgStyle}
              onLoad={() => setLoaded(true)}
              onError={(e) => {
                setError(e);
                console.log(e);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default images;
