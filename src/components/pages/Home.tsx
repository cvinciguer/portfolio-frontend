import React from "react";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* HEADER */}
      <header className="hero">
        <div className="hero-text">
          <h1>Clément, Ingénieur, développeur & amoureux de data</h1>
          <p>Alliant technologie, voyages et créativité pour repousser les limites</p>
          <a href="#contact" className="cta-button">Me contacter</a>
        </div>
      </header>

      {/* SECTION À PROPOS */}
      <section className="about">
        <div className="about-content">
          <img src="/images/profile.jpg" alt="Clément" className="profile-pic" />
          <div className="about-text">
            <h2>À propos</h2>
            <p>
              Passionnée de technologie, de langues et de danse, je suis une ingénieure en télécommunication reconvertie en développeuse web & créatrice de contenu. 
              Mon parcours atypique me permet de créer des projets innovants et de partager mes connaissances.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section className="skills">
        <h2>Compétences</h2>
        <div className="skills-grid">
          <div className="skill-card">💻 Développement Web</div>
          <div className="skill-card">🎨 UX/UI Design</div>
          <div className="skill-card">📱 Applications Mobiles</div>
          <div className="skill-card">🌎 Langues & Communication</div>
          <div className="skill-card">📸 Création de Contenu</div>
          <div className="skill-card">💃 Danse & Culture Latine</div>
        </div>
      </section>

      {/* SECTION EXPÉRIENCE */}
      <section className="experience">
        <h2>Expériences</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Développeuse Web & Logiciel</h3>
            <p>Freelance - 2022 à Aujourd’hui</p>
          </div>
          <div className="timeline-item">
            <h3>Créatrice de Contenu</h3>
            <p>Instagram & Réseaux sociaux - 2023 à Aujourd’hui</p>
          </div>
          <div className="timeline-item">
            <h3>Ingénieure Télécom</h3>
            <p>Ancienne activité - 2019 à 2022</p>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="contact" id="contact">
        <h2>Me contacter</h2>
        <p>Envie de discuter d’un projet ou de collaborer ? N’hésitez pas à me contacter.</p>
        <a href="mailto:email@example.com" className="cta-button">Envoyer un e-mail</a>
      </section>
    </div>
  );
};