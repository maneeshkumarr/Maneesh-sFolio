// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling


const Header = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div class='manish-div'>Maneesh's Folio</div>
      <nav className="navbar">
        {/* <button onClick={() => handleScroll('home')}>Home</button> */}
        <button onClick={() => handleScroll('about')}>About</button>
        <button onClick={() => handleScroll('education')}>Education</button>
        <button onClick={() => handleScroll('skills')}>Skills</button>
        <button onClick={() => handleScroll('projects')}>Projects</button>
        <button onClick={() => handleScroll('certificates')}>Certificates</button>
        <button onClick={() => handleScroll('contact')}>Contact</button>
      </nav>
    </header>
  );
};


export default Header;
