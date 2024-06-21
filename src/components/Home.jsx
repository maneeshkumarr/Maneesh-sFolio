import React from 'react';
import './Home.css'; // Importing CSS for styling
import profilePic from '../assets/images/manishcam2.jpg';
import codingIcon from '../assets/images/coding.png'; // Importing the coding icon

export default function Home() {
  return (
    <div id="home" className="home-container">
      <div className="left-side">
        <div className="text">
         
          <h2 className='this'>This is </h2>
          <h2 className='man'>Maneesh Kumar</h2>
        
          <img src={codingIcon} alt="Coding Icon" className="coding-icon" />  <p  className='web'>Web Developer</p>
        </div>
      </div>
      <div className="right-side">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
}
