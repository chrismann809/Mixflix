import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return {
    currentUser: users[session.id],
    currentPage: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
