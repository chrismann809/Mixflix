import React from 'react';
import { Link } from 'react-router-dom';
import { createList } from '../../actions/list_actions';

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
      password: '',
      list_id: null
    };

    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmitLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  handleSubmitSignup(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(currentUserInfo => {
        const newListInfo = { user_id: currentUserInfo.currentUser.id }
        this.props.createList(newListInfo)
      })
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
        <form onSubmit={this.handleSubmitLogin} className="login-form-box">
          <div className="login-form">
            <h1>{"Sign In"}</h1>
            {this.props.errors.length > 0 ? <p className="login-error"><strong>Invalid credentials.</strong> Please try again.</p> : ""}
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
            <p className="login-new">New to Mixflix? <Link id="login-signup-link" to="/">Sign up now</Link>.</p>
          </div>
        </form>
      </div>
    )

    const signupForm = (
      <div className="signup-form-container">
        <div className="signup-back"></div>
        <form onSubmit={this.handleSubmitSignup} className="signup-form-box">
          <div className="signup-form">
            <div className="signup-text">
              <h2>Create a password to start your membership.</h2>
              <p>Just a few more steps and you're done!</p>
              <p>We hate paperwork, too.</p>
            </div>
            <div className="signup-input">
              <div className="signup-email-input">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signup-input"
                  required
                />
                <span className="signup-email-label">Email</span>
              </div>
              <br/>
              <div className="signup-password-input">
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input"
                  required
                />
                <span className="signup-password-label">Password</span>
              </div>
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
