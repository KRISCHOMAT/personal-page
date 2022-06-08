import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import classes from "../styles/components/Carousel.module.css";

const Carousel = ({ title, images }) => {
  const [recentImg, setRecentImg] = useState(0);

  const forward = () => {
    if (recentImg == images.length - 1) {
      setRecentImg(0);
      return;
    }
    setRecentImg(recentImg + 1);
  };

  const backward = () => {
    if (recentImg == 0) {
      setRecentImg(images.length - 1);
      return;
    }
    setRecentImg(recentImg - 1);
  };

  if (!images || images.length === 0) {
    return;
  }

  return (
    <div className={classes.container}>
      <Image
        src={images[recentImg]}
        alt={title}
        layout={"fill"}
        objectFit={"cover"}
      />
      <div className={classes.arrowLeft} onClick={backward}>
        <FiArrowLeft size={40} />
      </div>
      <div className={classes.arrowRight} onClick={forward}>
        <FiArrowRight size={40} />
      </div>
    </div>
  );
};

export default Carousel;
