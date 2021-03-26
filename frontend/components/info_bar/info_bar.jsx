import React from 'react';
import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { IconContext } from 'react-icons'


const InfoBar = ({currentUser, currentPage, logout, processForm}) => {
  const landingInfo = () => (
    <div className= "landing-login-info-container">
      <a href="http://github.com/chrismann809"><IconContext.Provider value={{ color: "white" }}><SiGithub className="footer-git"/></IconContext.Provider></a>
      <a href="http://linkedin.com/"><IconContext.Provider value={{ color: "white" }}><SiLinkedin className="footer-linked"/></IconContext.Provider></a>
    </div>
  );

  const loginInfo = () => (
    <div className= "landing-login-info-container">
      <a href="http://linkedin.com/"><IconContext.Provider value={{ color: "white" }}><SiLinkedin className="footer-linked"/></IconContext.Provider></a>
      <a href="http://github.com/chrismann809"><IconContext.Provider value={{ color: "white" }}><SiGithub className="footer-git"/></IconContext.Provider></a>
    </div>
  )
  
  const signupInfo = () => (
    <div className= "signup-info-container">
      <a href="http://github.com/chrismann809"><IconContext.Provider value={{ color: "black" }}><SiGithub className="footer-git"/></IconContext.Provider></a>
      <a href="http://linkedin.com/"><IconContext.Provider value={{ color: "black" }}><SiLinkedin className="footer-linked"/></IconContext.Provider></a>
    </div>
  )

  return currentUser ? null : (currentPage === '/login') ? loginInfo() : (currentPage === '/signup') ? signupInfo() : landingInfo();
};


export default InfoBar;
