import React, { useEffect, useRef } from "react";
import "./Home.css";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";

export const Home: React.FC = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);

    // Remonte en haut au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  return (
    <div className="home-container">
      {/* HEADER AVEC EFFET PARALLAXE */}
      <HeroSection contactRef={contactRef} />

      {/* SECTION À PROPOS */}
      <AboutSection />

      {/* SECTION COMPÉTENCES AVEC ICÔNES */}
      <SkillsSection />

      {/* SECTION EXPÉRIENCE */}
      <ExperienceSection />

      {/* SECTION CONTACT INTERACTIF */}
      <ContactSection contactRef={contactRef} />

      <div className="spacer"></div>
    </div>
  );
};

export default Home;
