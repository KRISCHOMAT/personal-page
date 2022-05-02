import classes from "../styles/components/MusicCard.module.css";
import image from "../public/images/music/kosmo-vid-still-edit.jpg";
import Image from "next/image";

const MusicCard = ({ title, image, info, sideInfo, links }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>

      <div className={classes.imageContainer}>
        <div className={classes.image}>
          <Image src={image} alt="kosmorama" />
        </div>
      </div>

      <div className="content">
        <div className={classes.info}>{info}</div>
        <div className={classes.sideInfo}>
          <span>{sideInfo}</span>
        </div>
        {links.length > 0 && (
          <div className={classes.links}>
            <h3 className={classes.linksHeading}>Links</h3>
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                  className={classes.linkItem}
                >
                  {link.title}
                </a>
              );
            })}
          </div>
        )}
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default MusicCard;
