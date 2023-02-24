/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';

function Projects() {
  const [projects] = useState([
    {
      title: "IKEA Clone- Full Stack",
      img: "/projects/ss3.jpg",
      gLink: "https://github.com/bharatvishvkarma/Ikea-full-stack-project",
      lLink: "https://my-q0qb5j3rs-bharatvishvkarma.vercel.app/",
      desc: "IKEA is a Swedish multinational conglomerate based in the Netherlands that designs and sells ready-to-assemble furniture, kitchen appliances, decoration, home accessories, and various other goods and home services. I uses Node JS, MongoDB and Express for backend and React for frond end to build this clone."
    },
    {
      title: "Freshly Clone",
      img: "/projects/ss1.jpg",
      gLink: "https://github.com/Meshabaz/freshly-clone",
      lLink: "https://snazzy-crostata-4c826a.netlify.app/index.html",
      desc: "Freshly is a New York-based prepared meal delivery company that delivers throughout the United States. Where I created Product page and Cart page and worked on filter section and for make this dynamic I used JavaScript."
    },
    {
      title: "boAt Clone",
      img: "/projects/ss2.jpg",
      gLink: "https://github.com/bharatvishvkarma/boAt-lifeStyle-Clone",
      lLink: "https://visionary-profiterole-96c1db.netlify.app/",
      desc: "BoAt is an India-based consumer electronics brand that markets earphones, headphones stereos, travel chargers, and premium rugged cables. Where I created Landing Page which is fully Responsive and worked on Cart page."
    },
    
    
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
              {/* <div style={{fontSize:"20px",display:"flex",gap:"20px",alignItems:"center",borderBottom:"1px solid red",marginBottom:"8px"}}>
                <h3>Tech Stack: </h3>
                <AiOutlineHtml5 />
                <DiCss3 />
                <DiJavascript />
              </div> */}
              <p style={{marginTop:"10px"}}>
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
