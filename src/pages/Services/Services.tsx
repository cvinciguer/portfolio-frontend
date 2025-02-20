import React from "react";
import "./Services.css";

export const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <h1 className="services-title">Mes Services</h1>
        <p className="services-subtitle">
          Je propose des services personnalisés adaptés à vos besoins. Contactez-moi pour discuter de votre projet ! 🚀
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h2>Développement Web</h2>
            <p>Création de sites modernes, optimisés et responsives avec React.js, Next.js, et plus encore.</p>
          </div>

          <div className="service-card">
            <h2>Optimisation SEO</h2>
            <p>Amélioration du référencement naturel (SEO) pour booster votre visibilité sur Google.</p>
          </div>

          <div className="service-card">
            <h2>Intégration & UI/UX</h2>
            <p>Design intuitif et interface soignée pour offrir la meilleure expérience utilisateur.</p>
          </div>

          <div className="service-card">
            <h2>Automatisation & Scripts</h2>
            <p>Développement de scripts et outils automatisés pour optimiser votre workflow.</p>
          </div>

          <div className="service-card">
            <h2>Consulting Tech</h2>
            <p>Conseils techniques et accompagnement pour vos projets web et logiciels.</p>
          </div>

          <div className="service-card">
            <h2>Déploiement & Hébergement</h2>
            <p>Mise en place et gestion de serveurs, cloud, et services d’hébergement.</p>
          </div>
        </div>

        <div className="contact-section">
          <p>Intéressé par un de ces services ? Discutons ensemble de votre projet !</p>
          <a href="/contact" className="cta-button">Me contacter</a>
        </div>
      </div>
    </section>
  );
};