import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Browse from './browse';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return {
    currentUser: users[session.id],
    currentPage: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
