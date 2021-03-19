import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({currentUser, currentPage, logout, processForm}) => {
  const landingLinks = () => (
    <div>
        <img className="landing-logo" src="https://i.imgur.com/CA5t28a.png"/>
        {/* <img className="landing-back-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/3d037465-1692-41b0-84a8-073ccb74255f/US-en-20210315-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
        <div className="landing-back-gradient"></div> */}
        <button id="demo-btn" onClick={() => processForm({username: "demo-user", password: "pass123"})}>Demo Login</button>
        <nav id="login">
            <Link to="/login">Sign In</Link>
        </nav>
    </div>
  );

  const loginLinks = () => (
    <div>
      <Link to="/"><img className="login-logo" src="https://i.imgur.com/CA5t28a.png"/></Link>
    </div>
  )
  
  const signupLinks = () => (
    <div className='signup-nav'>
      <Link to="/"><img className="signup-logo" src="https://i.imgur.com/CA5t28a.png"/></Link>
      <nav id="signup-login">
        <Link id="login-btn" to="/login">Sign In</Link>
      </nav>
    </div>
  )

  const personalGreeting = () => (
    <hgroup className="header-group">
      {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : (currentPage === '/login') ? loginLinks() : (currentPage === '/signup') ? signupLinks() : landingLinks();
};


export default NavBar;
