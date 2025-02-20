import React from "react";
import styles from "./HeroSection.module.css"; // Assurez-vous d'importer le module CSS
import { name, description } from "../../data/data";

interface HeroProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroProps> = ({ contactRef }) => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>{name}</h1>
        <h2 className={styles.heroSubtitle}>{description}</h2>
        <a className={styles.ctaButton} onClick={() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }}>
          Me contacter
        </a>
      </div>
    </header>
  );
};