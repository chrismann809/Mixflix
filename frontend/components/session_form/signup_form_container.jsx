import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { createList } from '../../actions/list_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
    landingProps: ownProps.location.state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    createList: (userId) => dispatch(createList(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
