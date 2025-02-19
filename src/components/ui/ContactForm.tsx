import React from "react";
import "./ContactForm.module.css";
import "../../pages/Home/Home.css"

export const ContactForm: React.FC = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Nom" required />
      <input type="email" placeholder="E-mail" required />
      <textarea placeholder="Votre message" required></textarea>
      <button type="submit" className="cta-button">Envoyer</button>
    </form>
  );
};