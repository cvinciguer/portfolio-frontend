import React, { useEffect, useRef } from "react";
import { ContactSection } from "../Home/ContactSection";

export const Contact: React.FC = () => {
    const contactRef = useRef<HTMLDivElement | null>(null);
    
    // Remonte en haut au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  return <ContactSection contactRef={contactRef} />;
};