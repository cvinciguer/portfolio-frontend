import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../../../utils/i18n";

const getInitialTheme = (): "light" | "dark" | "auto" => {
  if (typeof window === "undefined") return "auto";
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return "auto";
};

const applyTheme = (theme: "light" | "dark" | "auto") => {
  const html = document.documentElement;
  if (theme === "auto") {
    html.removeAttribute("data-theme");
  } else {
    html.setAttribute("data-theme", theme);
  }
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  const [theme, setTheme] = useState<"light" | "dark" | "auto">(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    if (theme === "auto") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const nextTheme = () => {
    setTheme((prev) =>
      prev === "auto" ? "light" : prev === "light" ? "dark" : "auto"
    );
  };

  return (
    <nav>
      <Link to="/" className="title">
        💻 Not A Web Dev
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">{t("nav.experience") || "Mon expérience"}</NavLink>
        </li>
        <li>
          <NavLink to="/services">{t("nav.services") || "Mes services"}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{t("nav.contact") || "Contact"}</NavLink>
        </li>
      </ul>
      <div className="navbar-actions">
        <select
          value={lang}
          onChange={e => setLang(e.target.value as any)}
          aria-label="Langue"
          className="navbar-lang-select"
        >
          <option value="fr">🇫🇷 FR</option>
          <option value="en">🇬🇧 EN</option>
          <option value="es">🇪🇸 ES</option>
        </select>
        <button
          className="theme-switch"
          onClick={nextTheme}
          title={
            theme === "auto"
              ? "Thème : Système"
              : theme === "light"
              ? "Thème : Clair"
              : "Thème : Sombre"
          }
          aria-label="Changer le thème"
          type="button"
        >
          {theme === "auto" && "🌓"}
          {theme === "light" && "🌞"}
          {theme === "dark" && "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;