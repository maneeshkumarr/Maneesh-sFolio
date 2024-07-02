import React from 'react';
import './Footer.css'; // Make sure to create this CSS file
import { FaLinkedin, FaInstagram, FaGithub, FaRegEnvelope, FaPhoneAlt, FaFileAlt, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <section  className="foot-section">
      <footer className="footer">
        <div className="contact-info">
          <div className="contact-item">
            <FaRegEnvelope className="contact-icon" />
            <a href='manishpersonal638@gmail.com'>manishpersonal638@gmail.com</a>
          </div> 
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+91 8792489207</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Mangalore, Dakshina Kannada, Karnataka, India</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/maneesh-kumar-b17787262" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub className="social-icon" />
          </a>
          
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter className="social-icon" />
          </a>
        </div>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Need Help?</a>
          <a href="#">Content Guide</a>
          <a href="#">Learn Together</a>
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Advertising</a>
          <a href="#">Jobs</a>
        </div>
       
        <div className="footer-copy">
          <p>&copy; 2024 web-dev(maneesh)</p>
        </div>
      </footer>
    </section>
  );
}
