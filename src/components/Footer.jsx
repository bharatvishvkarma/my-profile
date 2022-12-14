/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';

function Footer() {
  return (
    <footer>
      <div id="container" className="containers">
        <h1 style={{color:"#ef403f"}}>Contact</h1>
        <h1 style={{color:"teal",fontSize:"45px"}}>𝗕𝗵𝗮𝗿𝗮𝘁 𝗩𝗶𝘀𝗵𝘃𝗸𝗮𝗿𝗺𝗮</h1>
        <a href="https://www.linkedin.com/in/bharatvishvkarma/" target="_blank" style={{marginBottom:"5px"}}><FaLinkedin/>: bharatvishvkarma</a>
        <a style={{marginBottom:"5px"}}><FiMail/>: bharatsharma1995@outlook.com</a>
        <a style={{alingnContent:"center"}}>< MdCall/>: +91-7023602287</a>
      </div>
    </footer>
  );
}

export default Footer;
