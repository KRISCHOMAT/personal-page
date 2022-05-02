import Link from "next/link";
import links from "../../utils/links";
import classes from "../../styles/layout/Header.module.css";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import MobileMenue from "./MobileMenue";
import { useRouter } from "next/router";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [oldScollPosition, setOldScrollPosition] = useState(0);
  const [scrollState, setScrollState] = useState(false);
  const [isShowMenue, setIsShowMenue] = useState(false);

  const router = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    setTimeout(() => {
      setOldScrollPosition(position);
    }, 500);

    if (scrollPosition > oldScollPosition && !isShowMenue) {
      setScrollState(true);
    } else if (scrollPosition < oldScollPosition) {
      setScrollState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleMenue = () => {
    setIsShowMenue(!isShowMenue);
  };

  return (
    <>
      <div
        className={
          !scrollState
            ? `${classes.headerContainer} ${classes.fadeIn}`
            : `${classes.headerContainer} ${classes.fadeOut}`
        }
      >
        <div className={classes.logoContainer}>
          <Logo />
        </div>
        <div className={classes.menueContainer}>
          {links.map((link, index) => {
            return (
              <Link href={link.url} key={index}>
                <a className={classes.linkItem}>{link.name}</a>
              </Link>
            );
          })}
        </div>
        <div className={classes.burgerContainer} onClick={toggleMenue}>
          <GiHamburgerMenu size={40} />
        </div>
      </div>
      <MobileMenue toggle={isShowMenue} handleClick={toggleMenue} />
    </>
  );
};

export default Header;
