import React from "react";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* HEADER AVEC EFFET PARALLAXE */}
      <header className="hero">
        <div className="hero-text">
          <h1>Clément, Ingénieur, Développeur & data lover</h1>
          <p>Alliant technologie, voyages et créativité pour repousser les limites</p>
          <a href="#contact" className="cta-button">Me contacter</a>
        </div>
      </header>

      {/* SECTION À PROPOS */}
      <section className="about fade-in">
        <div className="about-content">
          <img src="./src/assets/avatar.png" alt="Clément" className="profile-pic" />
          <div className="about-text">
            <h2>À propos</h2>
            <p>
              Passionnée de technologie, de langues et de danse, je suis un ingénieur en télécommunication reconverti en développeur web.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES AVEC ICÔNES */}
      <section className="skills fade-in">
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
      <section className="experience fade-in">
        <h2>Expériences</h2>
        <div className="timeline">
          <div className="timeline-item slide-in">
            <h3>Développeur Web & Logiciel</h3>
            <p>Freelance - 2022 à Aujourd’hui</p>
          </div>
          <div className="timeline-item slide-in">
            <h3>Créateur de Contenu</h3>
            <p>Instagram & Réseaux sociaux - 2023 à Aujourd’hui</p>
          </div>
          <div className="timeline-item slide-in">
            <h3>Ingénieur Télécom</h3>
            <p>Ancienne activité - 2019 à 2022</p>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT INTERACTIF */}
      <section className="contact fade-in" id="contact">
        <h2>Me contacter</h2>
        <p>Envie de discuter d’un projet ou de collaborer ? Remplis le formulaire ci-dessous.</p>
        <form className="contact-form">
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Votre message" required></textarea>
          <button type="submit" className="cta-button">Envoyer</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
