import ContactForm from "../components/ContactForm";
import Heading from "../components/layout/Heading";

const Contact = () => {
  return (
    <main>
      <Heading title="Contact" />
      <div className="content">
        <p>
          You want to work with me? <br /> Get in touch!
        </p>
      </div>
      <ContactForm />
    </main>
  );
};

export default Contact;
