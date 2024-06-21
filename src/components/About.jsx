import React from 'react';
import './About.css';
import aboutImage from '../assets/images/meme.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
           <span className="subheading">My Intro....</span>
            <div className="container-about">
                <div className="row">
              
                    {/* Left Side: Image */}
                    <div className="col-md-6">
                        <div className="img-about">
                            <div className="overlay"></div>
                            <div className="img" style={{ backgroundImage: `url(${aboutImage})` }}></div>
                        </div>
                    </div>

                    {/* Right Side: About Content */}
                    <div className="col-md-6">
                        <div className="about-content">
                            <div className="heading-section text-left">
                               
                                <h2 className='abtnm'>About Me</h2>
                               <br /><br /> <br />

                                <ul className="about-info">
                                    <li><span>Name:</span> Maneesh Kumar</li>
                                    <li><span>Date of birth:</span> April 28, 2003</li>
                                    <li><span>Address:</span> Mangalore, Dakshina Kannada, Karnataka, India</li>
                                    <li><span>Zip code:</span> 574216</li>
                                    <li><span>Email:</span> manishpersonal638@gmail.com</li>
                                    <li><span>Phone:</span> +918792489207</li>
                                </ul>
<p className='oo'>
                                   I'm a Web developer, skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
                                    Strong problem-solver, committed to staying updated with industry trends.
                                    Seeking to contribute to innovative projects.
                                </p>
                                <div className="my-interest">
                                    <div className="interest-wrap">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                                                <path d="M12 3v10.15a3.991 3.991 0 0 0-1 .85V3h-2v10.15a3.991 3.991 0 0 0-1 .85V3H6v11.15a3.991 3.991 0 0 0-1 .85V3H4v12a4 4 0 1 0 2-3.31V3h2v9.69A4 4 0 1 0 14 17v-3h8v-2h-8V3h-2zm0 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                            </svg>
                                        </div>
                                        <div className="text">Music</div>
                                    </div>
                                    <div className="interest-wrap">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                                                <path d="M12 2a7 7 0 0 0-7 7v6H3.5a.5.5 0 0 0 0 1H4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2h.5a.5.5 0 0 0 0-1H19v-6a7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5v6H7V9a5 5 0 0 1 5-5zm-1 9h2v6h-2v-6zm-2 0v2h6v-2H9z"/>
                                            </svg>
                                        </div>
                                        <div className="text">Gaming</div>
                                    </div>
                                    <div className="interest-wrap">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                                                <path d="M20 1H4a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM9 22H5V10h4v12zm6 0h-4V10h4v12zm4 0h-2V10h2v12zm-1-14H6V3h12v5z"/>
                                            </svg>
                                        </div>
                                        <div className="text">Movie</div>
                                    </div>
                                    <div className="interest-wrap">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                                                <path d="M13 2v3H7v6h6v3h-6v6h6v3h2V2h-2zm2 2v16h4v2h-6V2h6v2h-4z"/>
                                            </svg>
                                        </div>
                                        <div className="text">Sports</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
