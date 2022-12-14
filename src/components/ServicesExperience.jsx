import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  let imgStyle = {
    width: "100px",
    height: "100px",
  }
  let pStyle ={
    color: "gray",
    fontWeight:"bolder",
    marginTop: "10px"
  }
  return (
    <section id = "tech-stack" >
      <div className="skills2">
        <h1 style={{color:"#ef403f",marginBottom:"25px",fontSize:"40px"}}>Skills</h1>
        <div className="skills">
          <div>
            <img style={imgStyle} src="/projects/html.png" />
            <p style={pStyle}>HTML</p>
          </div>
          <div>
          <img style={imgStyle} src="/projects/css.png" />
          <p style={pStyle}>Css</p>
          </div>
          <div>
          <img style={imgStyle} src="/projects/javascript.png" />
          <p style={pStyle}>Javascript</p>
          </div>
          <div>
            <img style={imgStyle} src="/projects/git.png" />
            <p style={pStyle}>GitHub</p>
          </div>
          <div>
          <img style={imgStyle} src="/projects/node.png" />
          <p style={pStyle}>Node Js</p>
          </div>
          <div>
          <img style={imgStyle} src="/projects/react.png" />
          <p style={pStyle}>React</p>
          </div>
          <div>
          <img style={imgStyle} src="/projects/redux.png" />
          <p style={pStyle}>Redux</p>
          </div>
          <div>
          <img style={imgStyle} src="/projects/mongo.png" />
          <p style={pStyle}>MongoDB</p>
          </div>
          {/* <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/128/733/733609.png" /> */}
        </div>
      </div>
    </section >
    
  );
}

export default ServicesExperience;


{/* <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>12</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>122+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div> */}
    // </section>