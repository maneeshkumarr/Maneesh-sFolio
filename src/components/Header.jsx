import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setExpanded(false); // Collapse the menu after scrolling
  };

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <header className="header">
        <div className="brand">Maneesh's Folio</div><br />
        <button onClick={toggleMenu} className="hamburger">&#9776; </button>
        <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
          <div className="card">
            <button onClick={() => handleScroll('home')}>Home</button>
            <button onClick={() => handleScroll('about')}>About</button>
            <button onClick={() => handleScroll('education')}>Education</button>
            <button onClick={() => handleScroll('skills')}>Skills</button>
            <button onClick={() => handleScroll('projects')}>Projects</button>
            <button onClick={() => handleScroll('certificates')}>Certificates</button>
            <button onClick={() => handleScroll('contact')}>Contact</button>
          </div>
        </nav>
      </header>
      <div className={`content ${expanded ? 'expanded' : ''}`}>
        {/* Your page content here */}
      </div>
    </>
  );
};

export default Header;
