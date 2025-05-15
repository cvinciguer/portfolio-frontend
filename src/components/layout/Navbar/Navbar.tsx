import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../../../utils/i18n";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

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
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;