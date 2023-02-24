/* eslint-disable jsx-a11y/anchor-is-valid */
import '/node_modules/font-awesome/css/font-awesome.min.css'; 
import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img style={{width:"200 px",borderRadius:"50px"}}  src="/projects/Bharat-image.png" alt="" onMouseLeave={e => e.currentTarget.src = "/projects/Bharat-image.png"} onMouseOver={e => e.currentTarget.src = "/projects/Bharat-image-grayBlack.png" }/>
          </div>
          <div className="banner-content">
            <h6 style ={{fontSize:"35px",marginBottom:"5px"}}>Hello, I'm Bharat Vishvkarma</h6>
            <h3 style ={{fontSize:"25px"}}>Full Stack Web Developer</h3>
            <p>
              
            To secure a challenging position in a reputable 
            organization to expand my learnings, knowledge, and skills. 
            Secure a responsible career opportunity to fully utilize my training and skills, 
            while making a significant contribution to the success of the company.
            </p>
            <div style = {{display:"flex",flexWrap:"wrap",gap:"15px"}}>
              <a className="btn" target="_blank" href="https://drive.google.com/file/d/1MMmDq5st8sL_tJZh9gZtPmFoBZOLiCq7/view?usp=share_link">
                Download CV
              </a>
              <a href = "https://github.com/bharatvishvkarma" target="_blank" style={{fontSize:"30px"}} className="btn" >
              <FaGithub />
              </a>
              <a style={{fontSize:"30px"}} className="btn" target="_blank" href="https://www.linkedin.com/in/bharatvishvkarma/">
                <FaLinkedin />
              </a>
            </div>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
