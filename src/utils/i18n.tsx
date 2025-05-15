import React, { createContext, useContext, useState, ReactNode } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import es from "../locales/es.json";

const locales: Record<string, any> = { fr, en, es };

type Lang = "fr" | "en" | "es";
const defaultLang: Lang = "fr";

interface I18nContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextProps>({
  lang: defaultLang,
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(defaultLang);

  const t = (key: string): string => {
    const dict = locales[lang] || {};
    return key.split('.').reduce((o, i) => (o ? o[i] : undefined), dict) ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
