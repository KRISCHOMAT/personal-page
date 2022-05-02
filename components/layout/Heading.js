import classes from "../../styles/components/Heading.module.css";

const Heading = ({ title, noMargin, mediumSize }) => {
  return (
    <div
      className={
        noMargin
          ? `${classes.container} ${classes.noMargin}`
          : `${classes.container}`
      }
    >
      <h1
        className={
          mediumSize
            ? `${classes.title} ${classes.mediumSize}`
            : `${classes.title}`
        }
      >
        {title}
      </h1>
      <hr className={classes.hr} />
    </div>
  );
};

export default Heading;
