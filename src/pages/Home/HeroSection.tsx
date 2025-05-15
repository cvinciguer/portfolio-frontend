import React from "react";
import styles from "./HeroSection.module.css";
import { useI18n } from "../../utils/i18n";

interface HeroProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroProps> = ({ contactRef }) => {
  const { t } = useI18n();

  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>{t("name")}</h1>
        <h2 className={styles.heroSubtitle}>{t("description")}</h2>
        <a
          className={styles.ctaButton}
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("contactCta") || "Me contacter"}
        </a>
      </div>
    </header>
  );
};