import React from 'react';
import { Link } from 'react-router-dom';



const InfoBar = ({currentUser, currentPage, logout, processForm}) => {
  const landingInfo = () => (
    <div className= "landing-login-info-container">
    </div>
  );

  const loginInfo = () => (
    <div className= "landing-login-info-container">
    </div>
  )
  
  const signupInfo = () => (
    <div className= "signup-info-container">
    </div>
  )

  return currentUser ? null : (currentPage === '/login') ? loginInfo() : (currentPage === '/signup') ? signupInfo() : landingInfo();
};


export default InfoBar;
