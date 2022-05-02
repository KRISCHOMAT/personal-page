import classes from "../styles/components/FormRow.module.css";

const FormRow = ({ name, labelText, type, value, handleChange }) => {
  if (type === "textarea") {
    return (
      <div className={classes.container}>
        <label htmlFor={name} className={classes.label}>
          {labelText}
        </label>
        <textarea
          id={name}
          name={name}
          value={value}
          className={classes.area}
          rows="13"
          onChange={handleChange}
        ></textarea>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <label htmlFor={name} className={classes.label}>
        {labelText}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        className={classes.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
