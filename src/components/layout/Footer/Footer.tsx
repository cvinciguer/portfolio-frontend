import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa"; // Icône LinkedIn

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Texte et informations */}
        <p>© {new Date().getFullYear()} Clément Vinciguerra. Tous droits réservés.</p>

        {/* Icône LinkedIn avec lien */}
        <a 
          href="https://www.linkedin.com/in/ton-profile" // Remplace par ton vrai LinkedIn
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