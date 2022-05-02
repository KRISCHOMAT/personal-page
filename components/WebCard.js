import Image from "next/image";
import classes from "../styles/components/WebCard.module.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import Carousel from "./Carousel";

const WebCard = ({ title, images, techs, links }) => {
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

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <Carousel title={title} images={images} />

      {/* <div className={classes.carousel}>
        <div className={classes.imageContainer}>
          <Parallax speed={-5}>
            <Image src={images[recentImg]} alt={title} />
          </Parallax>
        </div>
        <div className={classes.arrowLeft} onClick={backward}>
          <FiArrowLeft size={40} />
        </div>
        <div className={classes.arrowRight} onClick={forward}>
          <FiArrowRight size={40} />
        </div>
      </div> */}

      <div className={classes.footer}>
        <div className={classes.technologies}>
          <ul className={classes.list}>
            <h2 className={classes.titleLeft}>Technologies</h2>
            {techs.map((tech, index) => {
              return (
                <li className={classes.listItem} key={index}>
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.technologies}>
          <h2 className={classes.titleLeft}>Links</h2>
          <ul className={classes.list}>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} rel="noreferrer" target="_blank">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default WebCard;
