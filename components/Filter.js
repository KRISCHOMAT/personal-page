import classes from "../styles/components/Filter.module.css";

const Filter = ({ handleClick }) => {
  return (
    <div className={classes.container}>
      {/* <h3 className={classes.heading}>Filter</h3> */}
      <div className={classes.filterContainer}>
        {/* Frontend */}
        <div className={classes.filterElement}>
          <label htmlFor="frontend" />
          Frontend
          <label />
          <input
            type="checkbox"
            name="frontend"
            id="frontend"
            onClick={handleClick}
            className={classes.checkBox}
          />
        </div>
        {/* Backend */}
        <div className={classes.filterElement}>
          <label htmlFor="backend" />
          Backend
          <label />
          <input
            type="checkbox"
            name="backend"
            id="backend"
            onClick={handleClick}
            className={classes.checkBox}
          />
        </div>
        {/* DIY */}
        <div className={classes.filterElement}>
          <label htmlFor="diy" />
          DIY
          <label />
          <input
            type="checkbox"
            name="diy"
            id="diy"
            onClick={handleClick}
            className={classes.checkBox}
          />
        </div>
        {/* Music */}
        <div className={classes.filterElement}>
          <label htmlFor="music" />
          Music
          <label />
          <input
            type="checkbox"
            name="music"
            id="music"
            onClick={handleClick}
            className={classes.checkBox}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
