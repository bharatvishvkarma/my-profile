/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Freshly Clone",
      img: "/projects/ss1.jpg",
      gLink: "https://github.com/Meshabaz/freshly-clone",
      lLink: "https://snazzy-crostata-4c826a.netlify.app/index.html",
      desc: "Freshly is a New York-based prepared meal delivery company that delivers throughout the United States."
    },
    {
      title: "boAt Clone",
      img: "/projects/ss2.jpg",
      gLink: "https://github.com/bharatvishvkarma/boAt-lifeStyle-Clone",
      lLink: "https://visionary-profiterole-96c1db.netlify.app/",
      desc: "BoAt is an India-based consumer electronics brand that markets earphones, headphones stereos, travel chargers, and premium rugged cables."
    }
    
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/bharatvishvkarma?tab=repositories"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
