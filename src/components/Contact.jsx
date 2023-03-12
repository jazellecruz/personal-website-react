import EmailForm from "../components/EmailForm";
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="section-root" id="contact">
      <h3 className="accented-text title-section">Get in touch</h3>
      <p>Want to collaborate with me (or to hire me😉)? Shoot me an email!</p>
      <EmailForm />
    </div>
  )
}

export default Contact
