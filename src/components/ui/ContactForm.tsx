import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { useI18n } from "../../utils/i18n";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../../config";

export const ContactForm: React.FC = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setResult("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setResult("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder={t("form.name") || "Nom"}
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder={t("form.email") || "E-mail"}
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder={t("form.message") || "Votre message"}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "..." : t("form.send") || "Envoyer"}
      </button>
      {result === "success" && (
        <div style={{ color: "green", marginTop: 8 }}>
          {t("form.success") || "Message envoyé avec succès !"}
        </div>
      )}
      {result === "error" && (
        <div style={{ color: "red", marginTop: 8 }}>
          {t("form.error") || "Erreur lors de l'envoi. Veuillez réessayer."}
        </div>
      )}
    </form>
  );
};