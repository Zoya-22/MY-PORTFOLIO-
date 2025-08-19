src/
 ┣ components/
 ┃ ┣ Navbar.js
 ┃ ┣ Hero.js
 ┃ ┣ About.js
 ┃ ┣ Skills.js
 ┃ ┣ Projects.js
 ┃ ┣ Contact.js
 ┃ ┣ Footer.js
 ┣ App.js
 ┣ index.css
 ┗ index.js

 import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SZN</div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import profilePic from "../assets/PFP.jpg"; // place image in src/assets

const Hero = () => {
  return (
    <div id="home" className="hero-inner">
      <div className="profile-wrapper">
        <img src={profilePic} alt="My Profile" />
      </div>
      <div className="hero-text">
        <h1>Hello! This is Syeda Zoya :)</h1>
        <p>
          An undergraduate with passion for coding, web development, and
          innovative skills. I use HTML, JavaScript, and CSS for vibrant,
          playful designs. Dedicated to learning new technologies, building
          practical projects, and applying creative approaches to craft
          efficient digital solutions.
        </p>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-card">
          <h3>Education</h3>
          <p>Intermediate (ICS) - 2024 │ Matric (CompSci) - 2022</p>
        </div>
        <div className="about-card">
          <h3>Academics</h3>
          <p>
            Secured A grade in both school and college. Recognized for
            consistent hard work and improvement throughout studies.
          </p>
        </div>
        <div className="about-card">
          <h3>Key Strengths</h3>
          <p>Solution-Oriented │ Positive Attitude │ Time Management</p>
        </div>
        <div className="about-card">
          <h3>Languages</h3>
          <p>Proficient in Urdu & English</p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import canva from "../assets/can.png";
import cpp from "../assets/c.png";
import htmlcss from "../assets/hc.png";
import js from "../assets/js.png";
import ms from "../assets/ms.png";
import ed from "../assets/ed.png";
import ps from "../assets/ps.png";
import id from "../assets/id.png";
import ct from "../assets/ct.png";

const skills = [
  { img: canva, name: "Canva" },
  { img: cpp, name: "C++" },
  { img: htmlcss, name: "HTML/CSS" },
  { img: js, name: "JavaScript" },
  { img: ms, name: "Microsoft Office" },
  { img: ed, name: "Editing/Designing" },
  { img: ps, name: "Problem Solving" },
  { img: id, name: "Critical Thinking" },
  { img: ct, name: "Creativity & Innovation" },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.8;
      const section = document.querySelector("#skills");
      if (section.getBoundingClientRect().top < trigger) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className={visible ? "show" : ""}>
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import todo from "../assets/TODO.PNG";
import calc from "../assets/calu.png";
import laundry from "../assets/laun.png";

const projects = [
  {
    img: todo,
    title: "TO DO LIST",
    desc: "Created a simple to-do list application with JavaScript.",
    link: "https://github.com/Zoya-22/To-do-list",
  },
  {
    img: calc,
    title: "Calculator",
    desc: "Developed a functional calculator using HTML, CSS, and JavaScript.",
    link: "https://github.com/Zoya-22/Projects",
  },
  {
    img: laundry,
    title: "Laundry Website",
    desc: "A service website for a laundry business.",
    link: "https://github.com/Zoya-22/laundary-",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Click Me
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import wa from "../assets/wa.png";
import gmail from "../assets/gmail.png";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <a href="https://wa.me/+923198266936">
          <img src={wa} alt="WhatsApp" />
        </a>
        <a href="mailto:syedazoyanajam@gmail.com">
          <img src={gmail} alt="Gmail" />
        </a>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>Designed and Developed by Zoya | 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
