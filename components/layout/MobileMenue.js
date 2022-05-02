import classes from "../../styles/layout/MobileMenue.module.css";
import Link from "next/link";
import links from "../../utils/links";
import { useState } from "react";

const MobileMenue = ({ toggle, handleClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  if (!isClicked) {
    toggle && setIsClicked(true);
    return;
  }

  return (
    <div
      className={
        toggle
          ? `${classes.container} ${classes.fadeIn}`
          : `${classes.container} ${classes.fadeOut}`
      }
    >
      <div className={classes.menueContainer}>
        {links.map((link, index) => {
          return (
            <Link href={link.url} key={index}>
              <a className={classes.linkItem} onClick={handleClick}>
                {link.name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenue;
