import React, { useEffect } from "react";
import "./Services.css";
import { useI18n } from "../../utils/i18n";

export const Services: React.FC = () => {
    const { t } = useI18n();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  // @ts-ignore
  const services = t("services") as { title: string; description: string }[] || [];

  return (
    <section className="services">
      <div className="container">
        <h1 className="services-title">{t("servicesTitle") || "Mes Services"}</h1>
        <p className="services-subtitle">
          {t("servicesSubtitle") || "Je propose des services personnalisés adaptés à vos besoins. Contactez-moi pour discuter de votre projet ! 🚀"}
        </p>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="contact-section">
          <p>{t("servicesContactText") || "Intéressé par un de ces services ? Discutons ensemble de votre projet !"}</p>
          <a href="/contact" className="cta-button">{t("contactCta") || "Me contacter"}</a>
        </div>
      </div>
    </section>
  );
};