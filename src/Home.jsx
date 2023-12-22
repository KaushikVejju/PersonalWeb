// Landing Page for PCP Site
import React from 'react';
import './Home.css';
import kaushikvejju from './kaushikvejju.jpg';
const Home= ({ onBeginClick }) => {
  return (
        <div class="home-pic">
            <img class="kaushikpic" src={kaushikvejju} alt="pictureofkaushik" />   
        </div>
  );
};

export default Home;