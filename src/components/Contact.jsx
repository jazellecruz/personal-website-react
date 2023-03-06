import EmailForm from "../components/EmailForm";
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="section-root" id="contact">
      <h3 className="accented-text title-section">get in touch</h3>
      <p>Want to rock and roll with me? Shoot me an email and let's collaborate!</p>
      <EmailForm />
    </div>
  )
}

export default Contact
