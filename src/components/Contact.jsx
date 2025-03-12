import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
const Contact = ({ id }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7b5zwz9", "template_2blqf99", form.current, {
        publicKey: "B7JPiX7vzpmUBeql0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-section" id={id}>
      <h3 className="form-contact-title">¡Contáctame!</h3>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Nombre:</label>
        <input
          type="text"
          name="user_name"
          className="form-input"
          placeholder="Nombre"
        />
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          className="form-input"
          placeholder="Email"
        />
        <label>Mensaje:</label>
        <textarea name="message" className="form-input-textarea" />
        <input type="submit" value="Enviar" className="form-btn-submit" />
      </form>
    </section>
  );
};

export default Contact;
