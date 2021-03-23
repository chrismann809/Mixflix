import { connect } from "react-redux";
import Browse from "./browse";

import { fetchGenres } from "../../actions/genre_actions";

const mapStateToProps = ({ session, entities: { users, genres } }, ownProps) => ({
    genres: Object.entries(genres),
    currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres())
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse);