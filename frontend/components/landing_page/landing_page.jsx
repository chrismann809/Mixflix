import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { HiOutlineChevronRight } from 'react-icons/hi'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username !== "") {
      this.setState({
        redirect: true
      })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "/signup",
        state: { username: this.state.username } }}/>
    }
    const landing = () => (
      <div>
          <img className="landing-back-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/3d037465-1692-41b0-84a8-073ccb74255f/US-en-20210315-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
          <div className="landing-back-gradient"></div>
          <nav id="signup">
              <h1>Unlimited movies, TV shows, and more.</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input className='landing-email-input' type='text' onChange={this.update('username')} required/>
                  <span className="email-label">Email address</span>
                  <input className='landing-email-submit' type="submit" value={`Get Started`} /> 
                  <HiOutlineChevronRight className='chevron' />
                </form>
              </div>
          </nav>
      </div>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    );

    return this.props.currentUser ? personalGreeting() : landing();
  }
};


export default LandingPage;
