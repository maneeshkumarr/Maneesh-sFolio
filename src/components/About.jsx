import React from 'react';
import './About.css';
import aboutImage from '../assets/images/meme.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <span className="subheading">My Intro....</span>
            <div className="container-about">
                <div className="grid">
                    {/* Left Side: Image */}
                    <div className="img-about">
                        <div className="overlay"></div>
                        <div className="img" style={{ backgroundImage: `url(${aboutImage})` }}></div>
                    </div>

                    {/* Right Side: About Content */}
                    <div className="about-content">
                        <div className="heading-section text-left">
                            <h2 className='abtnm'>About Me</h2>
                            <ul className="about-info">
                                <li><span>Name:</span> Maneesh Kumar</li>
                                <li><span>Date of birth:</span> April 28, 2003</li>
                                <li><span>Address:</span> Mangalore, Dakshina Kannada, Karnataka, India</li>
                                <li><span>Zip code:</span> 574216</li>
                                <li><span>Email:</span> manishpersonal638@gmail.com</li>
                                <li><span>Phone:</span> +918792489207</li>
                            </ul>
                            <p className='oo'>
                               I'm a passionate IT student, skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
                                Strong problem-solver, committed to staying updated with industry trends.
                                Seeking to contribute to innovative projects.
                            </p>
                           
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>
    );
}

export default About;
