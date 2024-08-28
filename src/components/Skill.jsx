import React from 'react';
import html from '../assets/images/html2.png';
import css from '../assets/images/css3.png';
import js from '../assets/images/js4.png';
import reactImg from '../assets/images/react3.png';
import node from '../assets/images/node1.png';
import express from '../assets/images/express1.png';
import angular from '../assets/images/ang.png';
import vui from '../assets/images/vui1.png';
import boot from '../assets/images/boot.png';
import tail from '../assets/images/tail.png';
import Py from '../assets/images/python1.png';
import java from '../assets/images/java3.png';
import php from '../assets/images/php1.jpeg';
import mongo from '../assets/images/mongo.png';
import mysql from '../assets/images/mysql1.png';
import './Skill.css';

const skills = [
  { img: html, title: 'HTML', proficiency: 90 },
  { img: css, title: 'CSS', proficiency: 90 },
  { img: js, title: 'JavaScript', proficiency: 70 },
  { img: reactImg, title: 'React', proficiency: 80 },
  { img: node, title: 'Node.js', proficiency: 60 },
  { img: express, title: 'Express', proficiency: 60 },
  { img: boot, title: 'Bootstrap', proficiency: 60 },
  { img: tail, title: 'Tailwind CSS', proficiency: 50 },
  { img: Py, title: 'Python', proficiency: 50 },
  { img: java, title: 'Java', proficiency: 60 },
  { img: php, title: 'PHP', proficiency: 70 },
  { img: mongo, title: 'MongoDB', proficiency: 60 },
  { img: mysql, title: 'MySQL', proficiency: 75 }
];

function getProficiencyRange(proficiency) {
  if (proficiency >= 90) {
    return 'Advanced';
  } else if (proficiency >= 70) {
    return 'Intermediate';
  } else {
    return 'Beginner';
  }
}

export default function Skill() {
  return (
    <section id='skills' className='skill-section'>
      <h2 className="skill-header">Skills</h2>
      <div className='skill-container'>
        {skills.map((skill, index) => (
          <div className="skill-card text-start mb-4" key={index}>
            <img className="card-img-top" src={skill.img} alt={skill.title} />
            <div className="card-body">
              <h4 className="card-title">{skill.title}</h4>
              <p className="card-text">Proficiency: {getProficiencyRange(skill.proficiency)}</p>
              <div className="proficiency-bar">
                <div className="progress" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
