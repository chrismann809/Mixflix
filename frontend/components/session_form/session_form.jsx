import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    
    let email = "";

    if (props.landingProps) {
      email = props.landingProps.username;
    } else {
      email = "";
    }

    this.state = {
      username: email,
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
    const loginForm = (
      <div className="login-form-container">
        <img className="login-back-img" src="https://i.imgur.com/BuTGdhU.png" alt=""/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <h1>{"Sign In"}</h1>
            {this.props.errors.length > 0 ? <p className="login-error"><strong>Incorrect password.</strong> Please try again or you can <u>reset your password.</u></p> : ""}
            <br/>
            <div className="session-input">
              <div>
                <input type="text"
                  value={this.state.username ||= this.state.email}
                  onChange={this.update('username')}
                  className="login-input"
                  required
                />
                <span className="login-email-label">Email</span>
              </div>
              <br/>
              <div>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  required
                />
                <span className="login-password-label">Password</span>
              </div>
            </div>
            <br/>
            <input className="session-submit" type="submit" value={"Sign In"} />
            <p className="login-new">New to Mixflix? <Link to="/">Sign up now</Link>.</p>
          </div>
        </form>
      </div>
    )

    const signupForm = (
      <div className="signup-form-container">
        <div className="signup-back"></div>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="signup-form">
            <div className="signup-text">
              <h2>Create a password to start your membership.</h2>
              <p>Just a few more steps and you're done!</p>
              <p>We hate paperwork, too.</p>
            </div>
            <div className="signup-input">
              <input type="text"
                placeholder="Email"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
              <br/>
              <input type="password"
                placeholder="Add a password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </div>
            <br/>
            <input className="signup-submit" type="submit" value="Continue" />
          </div>
        </form>
      </div>
    )
    return this.props.formType === 'login' ? (loginForm) : (signupForm);
  }
}

export default SessionForm;
