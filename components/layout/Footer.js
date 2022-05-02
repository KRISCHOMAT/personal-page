import Link from "next/link";
import classes from "../../styles/layout/Footer.module.css";
import links from "../../utils/links";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.footerCell}>
          <h3 className={classes.heading}>pages</h3>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.url}>
                <a className={classes.linkItem}>{link.name}</a>
              </Link>
            );
          })}
        </div>
        <div className={classes.footerCell}>
          <h3 className={classes.heading}>rechtliches</h3>
          <Link href="/datenschutz">
            <a className={classes.linkItem}>Datenschutz</a>
          </Link>
          <Link href="/impressum">
            <a className={classes.linkItem}>Impressum</a>
          </Link>
          <Link href="/agb">
            <a className={classes.linkItem}>AGB</a>
          </Link>
        </div>
        <div className={classes.footerCell}>
          <h3 className={classes.heading}>connect</h3>
          <a
            href="mailto:christian.grothe@posteo.de"
            className={classes.linkItem}
          >
            EMail
          </a>
          <a
            href="https://www.linkedin.com/in/christian-grothe-a63124228/"
            className={classes.linkItem}
          >
            LinkedIn
          </a>
          <a href="https://github.com/KRISCHOMAT" className={classes.linkItem}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
