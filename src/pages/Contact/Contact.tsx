import React, { useRef } from "react";
import { ContactSection } from "../Home/ContactSection";

export const Contact: React.FC = () => {
    const contactRef = useRef<HTMLDivElement | null>(null);
  
  return <ContactSection contactRef={contactRef} />;
};