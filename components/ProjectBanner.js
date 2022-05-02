import classes from "../styles/components/ProjectBanner.module.css";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

const ProjectBanner = ({ name, image, url }) => {
  return (
    <div className={classes.container}>
      <Link href={url} passHref>
        <div>
          <div className={classes.headingContainer}>
            <h1 className={classes.heading}>{name}</h1>
            <div className={classes.iconContainer}>
              <BsArrowRight size={60} />
            </div>
          </div>
          <Parallax speed={-10}>
            <div className={classes.imageContainer}>
              <Image src={image} alt="synth" />
            </div>
          </Parallax>
        </div>
      </Link>
    </div>
  );
};

export default ProjectBanner;
