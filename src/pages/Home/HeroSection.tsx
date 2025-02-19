import React from "react";
import "./Home.css";
import { name, description } from "../../data/data";

interface HeroProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroProps> = ({ contactRef }) => {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1 className="hero-title">{name}</h1>
        <h2 className="hero-subtitle">{description}</h2>
        <a className="cta-button" onClick={() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }}>
          Me contacter
        </a>
      </div>
    </header>
  );
};