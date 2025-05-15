import React from "react";
import styles from "./ContactForm.module.css";
import { useI18n } from "../../utils/i18n";

export const ContactForm: React.FC = () => {
  const { t } = useI18n();

  return (
    <form className={styles.contactForm}>
      <input className={styles.input} type="text" placeholder={t("form.name") || "Nom"} required />
      <input className={styles.input} type="email" placeholder={t("form.email") || "E-mail"} required />
      <textarea className={styles.textarea} placeholder={t("form.message") || "Votre message"} required></textarea>
      <button type="submit" className={styles.button}>{t("form.send") || "Envoyer"}</button>
    </form>
  );
};