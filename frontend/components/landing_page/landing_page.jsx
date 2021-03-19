import React from 'react';
import { Link, Redirect } from 'react-router-dom';



const LandingPage = ({ currentUser, logout }) => {
  const landing = () => (
    <div>
        <img className="landing-back-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/3d037465-1692-41b0-84a8-073ccb74255f/US-en-20210315-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
        <div className="landing-back-gradient"></div>
        <nav id="signup">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            
            <div>
                <textarea></textarea>
                <span className="email-label">Email address</span>
                <Link id="signup-link" to="/signup">{'Get Started >'}</Link>
            </div>
        </nav>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : landing();
};


export default LandingPage;
