import React from "react";
import "./Home.css";
import { ContactForm } from "../../components/ui/ContactForm";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export const ContactSection: React.FC<ContactProps> = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="contact fade-in" id="contact">
      <h2>Me contacter</h2>
      <p>Envie de discuter d’un projet ou de collaborer ? Remplis le formulaire ci-dessous.</p>
      <ContactForm />
    </section>
  );
};