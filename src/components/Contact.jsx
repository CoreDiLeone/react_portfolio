import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
const Contact = ()=>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_5qef6ob', 'template_2fj5lxj', form.current, {
          publicKey: 'WzZaAHRYiupvubq0Y',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return(
        <section className="contact-section">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </section>
    )
}

export default Contact;