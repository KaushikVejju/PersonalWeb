import React from 'react';
import './Projects.css';

const Projects = ({ onBeginClick }) => {
  return (
        <div class="my-projects">
           <h2> My Projects </h2>
           <p class="projects-intro">
                Shown below are some of the coding projects I've worked on, both individually and with a group.
                Feel free to reach out if you want to work on something together. You can find
                these projects <a href="https://github.com/KaushikVejju">here</a>.
            </p>
            <br></br>
            <div class="project-container">
                <div class="project">
                    <h3 class="proj-name"> <b>SIFSearch: Internal Search Engine</b></h3>
                    <p class="project-description">
                        A Django-based search application designed for an on-campus investment fund.
                    </p>
                    <hr class="tech-dev"></hr>
                    <p class="project-description">
                        <b class="tech">Django, JavaScript, Algolia API, SQLite3</b>
                    </p>
                    <form action="https://github.com/KaushikVejju/SIFSearch" method="get" target="_blank">
                        <button class="project-btn" type="submit">GitHub Repo</button>
                    </form>
                </div>
                <br></br>

                <div class="project">
                    <h3 class="proj-name"><b>Automative Stock Data Analysis & Trading Strategy</b></h3>
                    <p class="project-description">
                        An overview of automative stock data provided yfinance, followed by the development
                        of a trading strategy for one of the tickers.
                    </p>
                    <hr class="tech-dev"></hr>
                    <p class="project-description">
                        <b class="tech">python, pandas, NumPy, yfinance, matplotlib</b>
                    </p>
                    <form action="https://github.com/KaushikVejju/Yfinance-EDA-Trading-Strategy" method="get" target="_blank">
                        <button class="project-btn" type="submit">GitHub Repo</button>
                    </form>
                </div>
                <br></br>
                <div class="project">
                    <h3 class="proj-name"><b> Manifest: Project Creation Platform</b></h3>
                    <p class="project-description">
                        A tool designed to help developers create and deploy their projects with ease through templated,
                        out-of-the-box features.
                    </p>
                    <hr class="tech-dev"></hr>

                    <p class="project-description">
                        <b class="tech">React, Node,js, Docker, YAML, GitHub Actions</b>
                    </p>
                </div>
                <br></br>

                <div class="project">
                    <h3 class="proj-name"> <b>Random Punch</b> </h3>
                    <p class="project-description">
                        A Java-based game simulating a fight between two players. Special moves included.
                    </p>
                    <hr class="tech-dev"></hr>

                    <p class="project-description">
                        <b class="tech">Java, JUnit</b>
                    </p>
                    <form action="https://github.com/KaushikVejju/Random-Punch" method="get" target="_blank">
                        <button class="project-btn" type="submit">GitHub Repo</button>
                    </form>
                </div>
            </div>
           
        </div>
       
  );
};

export default Projects;