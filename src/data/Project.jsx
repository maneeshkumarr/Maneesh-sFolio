import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
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

import './Project.css'; // Import the CSS file

export default function Project() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      

      <div className="project">
        <h3>simple E-commerce Website</h3>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img src={img4} alt="Project 2 Slide 1" />
          </div>
          <div>
            <img src={img5} alt="Project 2 Slide 2" />
          </div>
          <div>
            <img src={img6} alt="Project 2 Slide 3" />
          </div>
        </Carousel>
        <p>Description of project 2.</p>
        <a href="https://project2website.com" className="btn" target="_blank" rel="noopener noreferrer">
          Visit....
        </a>
      </div>

      <div className="project">
        <h3 >Wedding Event Management Website</h3>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img src={img1} alt="Project 1 Slide 1" />
          </div>
          <div>
            <img src={img2} alt="Project 1 Slide 2" />
          </div>
          <div>
            <img src={img3} alt="Project 1 Slide 3" />
          </div>
          <div>
            <img src={img4} alt="Project 1 Slide 4" />
          </div>
          <div>
            <img src={img5} alt="Project 1 Slide 5" />
          </div>
          <div>
            <img src={img6} alt="Project 1 Slide 6" />
          </div>
          <div>
            <img src={img7} alt="Project 1 Slide 7" />
          </div>
          <div>
            <img src={img8} alt="Project 1 Slide 8" />
          </div>
          <div>
            <img src={img9} alt="Project 1 Slide 9" />
          </div>
          <div>
            <img src={img10} alt="Project 1 Slide 10" />
          </div>
          <div>
            <img src={img11} alt="Project 1 Slide 11" />
          </div>
        </Carousel>
        <p>A-z Wedding Event Management</p>
        <a href="http://a-zweddingmanagement.vercel.app" target="_blank" rel="noopener noreferrer">
          Visit ...
        </a>
      </div>

      
    </section>
  );
}
