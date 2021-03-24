import { connect } from "react-redux";
import Browse from "./browse";

import { fetchGenres } from "../../actions/genre_actions";
import { receiveList } from "../../actions/list_actions"

const mapStateToProps = ({ session, entities: { users, genres, list } }) => ({
    genres: Object.entries(genres),
    currentUser: users[session.id],
    list: list
})

const mapDispatchToProps = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    receiveList: listId => dispatch(receiveList(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse);