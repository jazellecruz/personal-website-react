import EmailForm from "../components/EmailForm";
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="section-root" id="contact">
      <p className="sub-text highlight-text">Get in Touch</p>
      <h3 className="large-text">Got a question or proposal, or just want to say hello? 
      <span className="highlight-text"> Shoot me a message</span>.</h3>
      <EmailForm />
    </div>
  );
}

export default Contact;
