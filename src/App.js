// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Project from './data/Project';
import Contacts from './components/Contacts';
import Home from './components/Home';
import './App.css'; // Import your CSS file for styling
import Education from './components/Education';
import Skill from './components/Skill';
import Certi from './components/Certi';
import Review from './components/Review';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
    <Home/>
    <About/>
    <Education/>
    <Skill/>
    <Project/>
    <Certi/>
    <Contacts/>
    <Footer/>
    <Review/>
       
    </>
  );
};

export default App;
