// Landing Page for PCP Site
import React, {useState} from 'react';
import './Welcome.css';
import Home from './Home';
import AboutMe from './Aboutme';
import Experience from './Experience';
import Projects from './Projects';
const Welcome = ({ onBeginClick }) => {
    const [currentPage, setCurrentPage] = useState('home');

    const handleButtonClick = (page) => {
      setCurrentPage(page);
    };
  return (
   
        <div class="intro-text">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" />
            <h1> Hello, I'm <b class = "my-name">Kaushik</b>.</h1>
            <p class="welcome-p"> 
                Welcome to my page, feel free to explore and learn more about me! <br></br>
            </p>
            <div class="intro-btns">
                <button onClick={() => handleButtonClick('home')}>Home</button>
                <button onClick={() => handleButtonClick('about')}>About Me </button>
                <button onClick={() => handleButtonClick('experience')}>Experience</button>
                <button onClick={() => handleButtonClick('projects')}>Projects</button>
            </div>
            
            <br></br>
            {currentPage === 'home' && (
               <Home></Home>
            )}

            {currentPage === 'about' && (
                <AboutMe></AboutMe>
            )}
            {currentPage === 'experience' && (
                <Experience></Experience>
            )}
            {currentPage === 'projects' && (
                <Projects></Projects>
            )}
        </div>
        
  );
};

export default Welcome;