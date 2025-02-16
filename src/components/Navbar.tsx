// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Accueil</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>À propos</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" style={styles.navLink}>Services</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;