'use client'
import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css'; // Modular CSS

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);

  };

  return (
    <header className={styles.header}>
      
      <div className={styles.brand}><img src="../logo/logo.jpg" alt="" className='logo'/></div>

      <button className={styles.menuButton} onClick={toggleNav}>
        ☰
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
