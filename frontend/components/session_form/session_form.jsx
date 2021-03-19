import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
        <div className="login-form-container">
        <Link to="/"><img className="landing-logo" src="https://i.imgur.com/CA5t28a.png"/></Link>
        <img className="landing-back-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/3d037465-1692-41b0-84a8-073ccb74255f/US-en-20210315-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
        <div className="landing-back-gradient"></div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <h1>{this.props.formType === 'login' ? "Sign In" : "Sign Up"}</h1>
            <br/>
            <div className="session-input">
              <input type="text"
                placeholder="Email address"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
              <br/>
              <input type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </div>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
