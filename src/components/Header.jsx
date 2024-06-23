// Header.js
import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="header">
      <div className="manish-div">Maneesh's Folio</div>
      <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
        <button onClick={toggleMenu} className="hamburger">&#9776;</button>
        <button onClick={() => { handleScroll('about'); toggleMenu(); }}>About</button>
        <button onClick={() => { handleScroll('education'); toggleMenu(); }}>Education</button>
        <button onClick={() => { handleScroll('skills'); toggleMenu(); }}>Skills</button>
        <button onClick={() => { handleScroll('projects'); toggleMenu(); }}>Projects</button>
        <button onClick={() => { handleScroll('certificates'); toggleMenu(); }}>Certificates</button>
        <button onClick={() => { handleScroll('contact'); toggleMenu(); }}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
