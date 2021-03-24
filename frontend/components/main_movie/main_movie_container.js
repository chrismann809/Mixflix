import { connect } from "react-redux";

import MainMovie from "./main_movie";
import { addMovieToList, removeMovieFromList } from "../../actions/list_actions";

const mapStateToProps = ( { entities: { genres, list } } ) => ({
    genres: Object.entries(genres),
    list: list
})

const mapDispatchToProps = dispatch => ({
    addMovieToList: likedMovie => dispatch(addMovieToList(likedMovie)),
    removeMovieFromList: movieId => dispatch(removeMovieFromList(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMovie);