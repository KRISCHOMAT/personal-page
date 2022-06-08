import { useState } from "react";
import classes from "../styles/components/ProjectCard.module.css";
import Carousel from "./Carousel";
import DynIcons from "./DynIcons";

const ProjectCard = ({ title, images, techs, links, description }) => {
  const [isReadMore, setisReadMore] = useState(true);
  return (
    <div className={classes.container}>
      {/* titel & carousel */}
      <h2 className={classes.title}>{title}</h2>
      <Carousel title={title} images={images} />

      {/* description */}
      <div className={classes.descriptionContainer}>
        <div
          className={
            isReadMore ? classes.showDescription : classes.hideDescription
          }
        >
          <p>{description}</p>
        </div>
      </div>

      {/* footer section */}
      <div className={classes.footer}>
        {/* techs */}
        <div className={classes.infos}>
          <h2 className={classes.title}>Technologies</h2>
          {techs.map((tech, index) => {
            return (
              <li className={classes.listItem} key={index}>
                {tech}
              </li>
            );
          })}
        </div>
        {/* links */}
        <div className={classes.infos}>
          <h2 className={classes.title}>Links</h2>
          {links.map((link, index) => {
            return (
              <li key={index} className={classes.listItem}>
                <a href={link.url} rel="noreferrer" target="_blank">
                  {link.name}
                </a>
                <DynIcons icon={link.name} />
              </li>
            );
          })}
        </div>
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default ProjectCard;
