// Landing Page for PCP Site
import React from 'react';
import './Aboutme.css';
import thespace from './thespace.jpg';
import lovesick from './lovesick.png';
import overexposed from './overexposed.png';
import ironman from './ironman.jpg';
import batman from './batman.jpg';
import tiger from './tiger.jpg';
// TO DO: ADD FONT AWESOME DETAILS

const AboutMe = ({ onBeginClick }) => {
  return (
        <div class="intro-text">
            <h2> About Me</h2>
            <p class="aboutmedetails"> 
                I'm currently studying Computer Science at the University of Maryland, College Park. I love the creativity that comes with Computer Science,
                especially being able to work on exciting projects and collaborating with others to do so. My technical interests are pretty vast, but I'm
                particulary intrigued by full-stack development, DevOps, observability, and data science. Outside of my tech interests, my main hobbies include
                running, drawing, and watching/analyzing movies. Take a look below to learn more about me!
    
            </p>
        
            <h2> Art</h2>
            <p  class="aboutmedetails">
                Since a young age, I've always loved sketching and art. For me, it's a form of relaxation and escapism. Here are some of my favorite drawings!
            </p>
            <br></br>
            <div class="drawings">
                <img class="albumcover" src={ironman} alt="ironman" />
                <img class="albumcover" src={tiger} alt="tiger" />
                <img class="albumcover" src={batman} alt="batman" />

            </div>

            <h2> Movie Rankings</h2>
            <p  class="aboutmedetails">
                I think I have an <i>elaborate</i> movie taste. I love mysteries, dramas, and action movies. Here are my favorite films for all time, definitely check them out! 
            </p>
            <p class="movierankings">
                <ol>
                    <li><b>Prisoners</b>, directed by Dennis Villeneuve. Absolute masterpiece. </li>
                    <li><b>Arrival</b>, directed by Dennis Villeneuve. Incredible sci-fi movie. </li>
                    <li><b>Spider-man 2</b>, directed by Sam Raimi. Best superhero film of all time. </li>
                    <li><b>Nightcrawler</b>, directed by Dan Gilroy. Incredible acting by Jake Gyllenhaal. </li>
                    <li><b>Incendies</b>, directed by Dennis Villeneuve. Yes, I am a Villeneuve fanboy. </li>
                    <li><b>Gone Girl</b>, directed by David Fincher. Last 20 minutes were insane. </li>
                    <li><b>Se7en</b>, directed by David Fincher. Peak thriller right here. </li>
                    <li><b>500 Days of Summer</b>, directed by Mark Webb. This movie has such an immaculate vibe. </li>
                    <li><b>Avengers: Infinity War</b>, directed by The Russo Brothers. Will the MCU ever be this good again? </li>
                    <li><b>The Prestige</b>, directed by Christopher Nolan. Nolan's best and most underrated film. </li>
                    <li><b>Your Name</b>, directed by Makato Shinkai. The animation in this movie is amazing. </li>
                    <li><b>A Silent Voice</b>, directed by Naoka Yamada. Amazing message. </li>
                    <li><b>Rangasthalam</b>, directed by Sukumar. For anyone interested in Tollywood, check this one out. </li>
                    <li><b>Before Sunrise</b>, directed by Richard Linklater. Incredible writing in this movie. </li>
                </ol>
            </p>
            <h2> What I've Been Listening To</h2>
            <p  class="aboutmedetails">
                I love listening to R&B, pop, acoustic, and hip-hop genres. I want to expand my music taste, but I have the albums below on repeat.
            </p>
            <br></br>
            <div class="musicalbums">
                <img class="albumcover" src={thespace} alt="thespacebetween" />
                <img class="albumcover" src={lovesick} alt="lovesick" />
                <img class="albumcover" src={overexposed} alt="overexposed" />

            </div>
            <br></br>
            <br></br>
        </div>
       
  );
};

export default AboutMe;