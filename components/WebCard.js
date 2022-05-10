import classes from "../styles/components/WebCard.module.css";
import { useState } from "react";
import Carousel from "./Carousel";

const WebCard = ({ title, images, techs, links }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <Carousel title={title} images={images} />

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
