import { connect } from "react-redux";

import BrowseMovie from "./browse_movie";
import { addMovieToList, removeMovieFromList } from "../../actions/list_actions"

const mapStateToProps = ( { entities: { list }}) => ({
    list: list
})

const mapDispatchToProps = dispatch => ({
    addMovieToList: likedMovie => dispatch(addMovieToList(movie)),
    removeMovieFromList: likedMovieId => dispatch(removeMovieFromList(likedMovieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BrowseMovie);