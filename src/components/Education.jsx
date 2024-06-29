import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Education.css'; // Ensure you have this CSS file created
import rightimage1 from '../assets/images/sdm2.jpg';
import rightimage2 from '../assets/images/sdm4.jpg';
import leftimage1 from '../assets/images/vani1.jpg';
import leftimage2 from '../assets/images/vani2.jpg';

export default function Education() {
  return (
    <section id='education' className='edu-section'>
      <div className='containerr'>
        <h2>Education</h2>
        <div className='education'>
          <div className='section-left'>
            <div className='left-text'>
              <h3>PUC Education</h3>
              <p><strong>College:</strong>VANI Pre University College, Belthangady</p>
              <p><strong>Stream:</strong> Science with PCMC (Physics, Chemistry, Mathematics, Computer Science)</p>
              <p><strong>Interests:</strong> Computer Science, Sports</p>
            </div>
            <div className='carousel-container'>
              <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop useKeyboardArrows>
                <div>
                  <img src={leftimage1} alt="PUC Image 1" className="carousel-image" />
                  <p className="legend"><a href="http://www.vanipucollege.in/">VANI PU COLLEGE</a></p>
                </div>
                <div>
                  <img src={leftimage2} alt="PUC Image 2" className="carousel-image" />
                  <p className="legend"><a href="http://www.vanipucollege.in/">VANI PU COLLEGE</a></p>
                </div>
              </Carousel>
            </div>
          </div>
          <div className='section-right'>
            <div className='right-text'>
              <h3>Degree Education</h3>
              <p><strong>College:</strong> Shri Dharmasthala Manjunatheshwara College, Ujire</p>
              <p><strong>Course:</strong> Bachelor of Computer Applications (BCA)</p>
              <p><strong>Field:</strong> Computer Science</p>
            </div>
            <div className='carousel-container'>
              <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop useKeyboardArrows>
                <div>
                  <img src={rightimage1} alt="Degree Image 1" className="carousel-image" />
                  <p className="legend"><a href="https://www.sdmcujire.in/"> SDM COLLEGE</a></p>
                </div>
                <div>
                  <img src={rightimage2} alt="Degree Image 2" className="carousel-image" />
                  <p className="legend"><a href="https://www.sdmcujire.in/"> SDM COLLEGE</a></p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
