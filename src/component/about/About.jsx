import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <h6>B-tech in Metallurgical and Materials Engineering</h6>
              <h6>(M.N.I.T,JAIPUR)</h6>
              <h6>2025</h6>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Problems</h5>
              <h6>2000+ solved</h6>
              <h6> across many</h6>
              <h6> plateforms</h6>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <h6>5+ projects </h6>
              <h6>completed</h6>
            </article>
          </div>
          <p>
            I am a Final year student at MNIT Jaipur pursuing B-tech in
            Metallurgical and Materials Engineering.I love codeing . Inspite of my core branch, I have choosen programming.I am expert in data structures and algorithms.I am a good competative programmer.I am a full stack web developer(MERN).I am eagerly looking forward to work as software developer and contribute to the project.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
