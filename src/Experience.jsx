// Landing Page for PCP Site
import React from 'react';
import './Experience.css';
import zillow from './zillow.png';
import pru from './pru.png';
import umd from './umd.png';
import h4i from './h4i.png';
import sif from './sif.png';


const Experience = ({ onBeginClick }) => {
  return (
        <div class="my-experience">
            <h2>My Experience</h2>
            <p class="experience-intro">
                Over the past few years, I've had different experiences in college related to software development. Here are some of the highlight
                experiences I've had and some descriptions about them.
            </p>
            <br></br>
            <div class="job">

                <h3 class="jobtitle"> <b>Zillow Group</b> | Software Development Engineer Intern | May 2023 - August 2023 </h3>
                <p class="description">
                    At Zillow, I worked in the Observability Team to develop a proof-of-concept for an observability framework that enables developers to define and
                    monitor their applications' service level objectives, or SLOs. To accomplish this, I developed a command-line interface tool integrated in different services
                    pipelines as well as a Grafana dashboard to visualize the SLOs in real-time.Throughout this internship, I developed my understanding of the observability and DevOps
                    fields while exploring technologies such as Golang, GitLab CI/CD, Prometheus, Grafana, and YAML. It was a really cool experience, and I visited Seattle for the 
                    first time!
                </p>
                <div class="job-img-container">
                    <img class="job-img" src={zillow} alt="zillow" />
                </div>

            </div>
            <br></br>
            <div class = "job">
                <h3 class="jobtitle"> <b>Prudential Financial</b> | Software Development Engineer Intern | June 2022 - August 2022 </h3>
                <p class="description">
                    At Prudential, I was involved in modernizing a legacy Group Insurance application that enabled users to apply for and calculate
                    their Disability Insurance. The beginning of the internship focused on making UI enhancements with Angular, while the later part
                    involved redesigning the backend of the application to support a microservice architecture. This position was my first exposure to
                    development at an enterprise-level, giving me better insight into technologies like Spring Boot, Oracle DB, Gradle, and Jenkins.
                </p>
                <div class="job-img-container">
                    <img class="job-img" src={pru} alt="pru" />
                </div>
            </div>
            <br></br>
            <div class="job">
                <h3 class="jobtitle"> <b>University of Maryland</b> | Undergraduate Teaching Assistant | August 2022 - January 2023 </h3>
                <p class="description">
                        As a Teaching Assistant for my university's Computer Systems class, I was responsible for holding office hours, creating rubrics,
                        and grading assignments ranging from projects to exams. This experience was very rewarding, strengthening my ability to explain
                        technical concepts to others and think about approaches to solving problems. I also enjoyed teaching the material of the course,
                        which focuses on C programming, dynamic memory allocation, and process control. 
                    </p>
                <div class="job-img-container">
                    <img class="job-img" src={umd} alt="umd" />
                </div>
            </div>
            <br></br>
            <div class="job">
                <h3 class="jobtitle"> <b>Hack4Impact</b> | Software Engineer | August 2023 - Present </h3>
                <p class="description">
                        Joining Hack4Impact gave me perspective into the world of software consulting, more specifically designing software for non-profits.
                        The team I worked on followed a traditional agile workflow, where biweekly sprints were set up and tasks were assigned for each sprint.
                        My team in particular was creating an application for Team River Runner, a nonprofit providing facilities for veterans. My work involved
                        adding a reporting feature to the application by leveraging tools like React and C#.
                    </p>
                <div class="job-img-container">
                    <img class="job-img" src={h4i} alt="h4i" />
                </div>
            </div>
            <br></br>
            <div class="job">
                <h3 class="jobtitle"> <b>Smith Investment Fund</b> | Quantitative Developer | October 2021 - Present </h3>
                <p class="description">
                    The Smith Investment Fund, or SIF, is a student-run investment group at UMD. I'm part of the club's Quantitative Team, which 
                    works on researching and developing systematic trading strategies. Currently, I am involved in the team's Internal Tools vertical,
                    which develops internal products that are leveraged by SIF's members. During my time in SIF, I've worked on developing an internal
                    search engine called SIFSearch, which you can learn more about in the 'Projects' section.
                    </p>
                <div class="job-img-container">
                    <img class="job-img" src={sif} alt="sif" />
                </div>
            </div>
            <br></br>



           
        </div>
       
  );
};

export default Experience;