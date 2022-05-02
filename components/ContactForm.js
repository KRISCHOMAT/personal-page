import { useState } from "react";
import FormRow from "./FormRow";
import classes from "../styles/components/ContactForm.module.css";

const ContactForm = () => {
  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    msg: "",
  };
  const [values, setValues] = useState(defaultValues);
  const [isSending, setIsSending] = useState(false);
  const [buttonName, setButtonName] = useState("Submit");

  const { name, email, subject, msg } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !msg) {
      setButtonName("provide all values");
      setTimeout(() => {
        setButtonName("Submit");
      }, 1500);
      return;
    }

    setIsSending(true);
    setButtonName("sending...");

    try {
      await fetch("/api/send-form", {
        method: "POST",
        body: JSON.stringify(values),
      });
      setButtonName("thanks for your message");
      setTimeout(() => {
        setValues(defaultValues);
        setIsSending(false);
        setButtonName("Submit");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.container}>
        <hr className={classes.hr} />
        <FormRow
          name="name"
          labelText="Name"
          type="text"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          name="email"
          labelText="Email"
          type="text"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name="subject"
          labelText="Subject"
          type="text"
          value={values.subject}
          handleChange={handleChange}
        />
        <FormRow
          name="msg"
          labelText="Message"
          type="textarea"
          value={values.msg}
          handleChange={handleChange}
        />
        {isSending ? (
          <button className="btn btn-disabled" type="submit" disabled>
            {buttonName}
          </button>
        ) : (
          <button className="btn" type="submit">
            {buttonName}
          </button>
        )}
      </form>
    </>
  );
};

export default ContactForm;
