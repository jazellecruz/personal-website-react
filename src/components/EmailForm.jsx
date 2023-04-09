import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = ({setAndOpenSnackbar}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, process.env.REACT_APP_PUBLIC_KEY
      )
      .then(result => {
          form.current.reset();
          setAndOpenSnackbar("success", "Successfully sent message!")
      }, error => {
        form.current.reset();
        setAndOpenSnackbar("error", "Failed to send message! Try again later.")
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-group">
        <div className="name-email-container">
            <div>
              <label>Name</label>
              <input type="text" 
                name="user_name" 
                className="input-box small-input"
                placeholder="Your name"/>
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" 
                name="user_email" 
                className="input-box small-input"
                placeholder="Your email"/>
            </div>
          </div>
        </div>
      <div className="input-group">
        <label>Message</label>
        <textarea name="message" 
          className="input-box"
          placeholder="Your message"/>
      </div>
      <button type="submit" className="submit-btn">Shoot</button>
    </form>
  );
};

export default EmailForm