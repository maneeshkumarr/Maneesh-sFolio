import React from 'react';
import './Contacts.css';
import { FaLinkedin, FaInstagram, FaGithub, FaRegEnvelope, FaPhoneAlt, FaFileAlt, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section id="contact" className="contact-section">
       <h2>Contact Me</h2>
      <div className="container">
       
        <div className="contact-content">
         
          <div className="contact-form-container">
            <form className="contact-form">
              <h3 className='getin-text'>Get in Touch</h3>
              <div className="form-group">
                <label  className='tx' htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label  className='tx' htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label className='tx' htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
