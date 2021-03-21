import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'
import { SiNetflix, SiGithub, SiLinkedin } from 'react-icons/si'


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

  const loggedIn = () => (
    <div className="logged-in-nav">
      <div className="nav-left">
        <Link to="/"><img className="logged-in-logo" src="https://i.imgur.com/CA5t28a.png"/></Link>
        <div className="page-nav">
          <div id="home-link">{currentPage === "/browse" ? <strong>Home</strong> : <Link to="/browse">Home</Link> }</div>
          <div id="my-list-link">{currentPage === "/browse/my-list" ? <strong>My List</strong> : <Link to="/browse/my-list">My List</Link> }</div>
        </div>
      </div>
      <div className="nav-right">
        <FaSearch id="search-icon"/>
        <div className="profile-dropdown">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
          <RiArrowDownSFill id="dropdown-arrow"/>
          <div className="profile-dropdown-content">
            <div className="profile-links">
              <a href="http://netflix.com/" id="profile-netflix-link"><div><SiNetflix id="profile-netflix-logo"/><p>Netflix</p></div></a>
              <a href="http://github.com/chrismann809/" id="profile-github-link"><div><SiGithub id="profile-github-logo"/><p>GitHub</p></div></a>
              <a href="http://linkedin.com/" id="profile-linkedin-link" ><div><SiLinkedin id="profile-linkedin-logo"/><p>LinkedIn</p></div></a>
            </div>
            <div className="logout-button"><button onClick={logout}>Sign out of Mixflix</button></div>
          </div>
        </div>
        
      </div>
      {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
      {/* <button className="header-button" onClick={logout}>Log Out</button> */}
    </div>
  );

  return currentUser ? loggedIn() : (currentPage === '/login') ? loginLinks() : (currentPage === '/signup') ? signupLinks() : landingLinks();
};


export default NavBar;
