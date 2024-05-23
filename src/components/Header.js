import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaDollarSign,
  FaPhone,
  // FaComments,
} from "react-icons/fa";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Usługi Elektryczne w Krośnie</h1>
      <nav style={styles.nav}>
        <div style={styles.navItem}>
          <a href="#home" style={styles.link}>
            <FaHome /> Strona Główna
          </a>
        </div>
        <div style={styles.navItem}>
          <a href="#about" style={styles.link}>
            <FaInfoCircle />
            VOLTA
          </a>
        </div>
        <div style={styles.navItem}>
          <a href="#offer" style={styles.link}>
            <FaTools /> Oferta
          </a>
        </div>
        <div style={styles.navItem}>
          <a href="#Gallery" style={styles.link}>
            <FaDollarSign /> Galeria
          </a>
        </div>
        <div style={styles.navItem}>
          <a href="#contact" style={styles.link}>
            <FaPhone /> Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#1D4ED8",
    color: "white",
    padding: "1rem",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 50,
  },
  title: {
    fontSize: "2rem",
    textAlign: "center",
  },
  nav: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-around",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
};

export default Header;
