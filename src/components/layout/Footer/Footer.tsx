import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { useI18n } from "../../../utils/i18n";
import { LINKEDIN_URL } from "../../../config";

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          {(t("footer.copyright") || `© ${new Date().getFullYear()} Clément Vinciguerra. Tous droits réservés.`)
            .replace("{{year}}", String(new Date().getFullYear()))}
        </p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};