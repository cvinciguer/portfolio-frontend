import React from "react";
import styles from "./ContactSection.module.css";
import { ContactForm } from "../../components/ui/ContactForm";
import { useI18n } from "../../utils/i18n";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export const ContactSection: React.FC<ContactProps> = ({ contactRef }) => {
  const { t } = useI18n();

  return (
    <section 
      ref={contactRef} 
      className={`${styles.contactSection} fade-in`}
      id="contact"
    >
      <h2>{t("contactTitle") || "Me contacter"}</h2>
      <p>{t("contactText") || "Envie de discuter d’un projet ou de collaborer ? Remplis le formulaire ci-dessous."}</p>
      <ContactForm />
    </section>
  );
};