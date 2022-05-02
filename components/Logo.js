import Link from "next/link";
import classes from "../styles/components/Logo.module.css";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h1 className={classes.logoElement}>Christian</h1>
          <hr className={classes.hrTop} />
          <h1 className={classes.logoElement}>Grothe</h1>
          <hr className={classes.hrBottom} />
        </a>
      </Link>
    </>
  );
};

export default Logo;
