import { connect } from 'react-redux';

import InfoBar from './info_bar';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return {
    currentUser: users[session.id],
    currentPage: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoBar);
