/*
Name: Lakhwinder chaudhary
StudentId: 301444106
Date: 28 September, 2024
File: Home.js
*/

import React from 'react';
import aboutImage from '../assets/abtme.avif';
import projectsImage from '../assets/proimg.jpeg';
import servicesImage from '../assets/services.jpeg';
import contactImage from '../assets/contact.png';

const sections = [
  {
    name: "About Me",
    image: aboutImage,
    description: "Learn more about my background and skills.",
    link: "/About"
  },
  {
    name: "My Projects",
    image: projectsImage,
    description: "Explore the projects I've worked on.",
    link: "/Projects"
  },
  {
    name: "My Services",
    image: servicesImage,
    description: "Discover the services I offer.",
    link: "/Services"
  },
  {
    name: "Contact Me",
    image: contactImage,
    description: "Get in touch with me.",
    link: "/Contact"
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Hi there!</h1>
      <h2> My name is Lakhwinder Chaudhary and i Welcome you to My Portfolio</h2>
      <h4>My Mission</h4>
      <p className="mission-statement">
        <span>
          Empowering innovative solutions through technology, I aim to harness my skills in software engineering to create impactful applications that improve everyday life.
        </span>
      </p>
      <div className="sections-grid">
        {sections.map((section, index) => (
          <div className="section-card" key={index}>
            <img className="section-image" src={section.image} alt={section.name} />
            <h4 className="section-name">{section.name}</h4>
            <p className="section-description">{section.description}</p>
            <a className="section-link" href={section.link}>
              View {section.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;