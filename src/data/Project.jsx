import React from 'react';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import img11 from '../assets/images/img11.png';


import './Project.css';

export default function Project() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>Project 1</h3>
        <div className="carousell">
          <img src={img1} alt="Project 1 Slide 1" />
          <img src={img2} alt="Project 1 Slide 2" />
          <img src={img3} alt="Project 1 Slide 3" />
          <img src={img4} alt="Project 1 Slide 1" />
          <img src={img5} alt="Project 1 Slide 2" />
          <img src={img6} alt="Project 1 Slide 3" />
          <img src={img7} alt="Project 1 Slide 1" />
          <img src={img8} alt="Project 1 Slide 2" />
          <img src={img9} alt="Project 1 Slide 3" />
          <img src={img10} alt="Project 1 Slide 3" />
          <img src={img11} alt="Project 1 Slide 3" />
        </div>
        <p>Description of project 1.</p>
        <a href="https://project1website.com" target="_blank" rel="noopener noreferrer">
          Visit Project 1 Website
        </a>
      </div>

      <div className="project">
        <h3>Project 2</h3>
        <div className="carousell">
          <img src={img4} alt="Project 2 Slide 1" />
          <img src={img5} alt="Project 2 Slide 2" />
          <img src={img6} alt="Project 2 Slide 3" />
        </div>
        <p>Description of project 2.</p>
        <a href="https://project2website.com" className="btn" target="_blank" rel="noopener noreferrer">
          Visit Project 2 Website
        </a>
      </div>

      {/* Add more projects as needed */}
    </section>
  );
}
