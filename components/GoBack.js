import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import classes from "../styles/components/GoBack.module.css";

const GoBack = ({ url }) => {
  return (
    <div className={classes.container}>
      <Link href={url} passHref>
        <div>
          <BsArrowLeft size={40} />
        </div>
      </Link>
    </div>
  );
};

export default GoBack;
