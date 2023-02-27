import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7mv13kf', 'template_hfn84hi', form.current, 'S2z636yqByQIXsYdP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="name-email-container">
        <div>
          <label>Name</label>
          <br/>
          <input type="text" name="user_name" className="input-box small-input"/>
        </div>
        <div>
          <label>Email</label>
          <br/>
          <input type="email" name="user_email" className="input-box small-input"/>
        </div>
      </div>
      <label>Subject</label>
      <br/>
      <input type="text" name="user_subject" className="subject-input input-box small-input"/>
      <br />
      <label>Message</label>
      <br/>
      <textarea name="message" className="message-input input-box"/>
      <br/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailForm