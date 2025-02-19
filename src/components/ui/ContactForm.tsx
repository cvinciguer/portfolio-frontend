import React from "react";
import styles from "./ContactForm.module.css";

export const ContactForm: React.FC = () => {
  return (
    <form className={styles.contactForm}>
      <input className={styles.input} type="text" placeholder="Nom" required />
      <input className={styles.input} type="email" placeholder="E-mail" required />
      <textarea className={styles.textarea} placeholder="Votre message" required></textarea>
      <button type="submit" className={styles.button}>Envoyer</button>
    </form>
  );
};