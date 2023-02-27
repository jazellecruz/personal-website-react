import EmailForm from "../components/EmailForm";
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="section-root" id="contact">
      <h3 className="accented-text title-section">get in touch</h3>
      <p>
        Want to have an awesome collaboration with me (or to hire me 😉)? You can message 
        me through my email. My inbox will always be open.
      </p>
      <EmailForm />
    </div>
  )
}

export default Contact
