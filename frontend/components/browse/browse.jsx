import React from 'react';
import { render } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import MainMovieContainer from "../main_movie/main_movie_container"
import BrowseGenre from "../browse_genre/browse_genre"


class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainEnded: false
        }

        this.handleEnded = this.handleEnded.bind(this);
    }

    componentDidMount() {
        this.props.fetchGenres();
        if (this.props.currentUser.listId === "") window.location.reload();
        this.props.receiveList(this.props.currentUser.listId);
    }

    handleEnded(mainMovie) {
        this.setState({
            mainEnded: true
        })
    }

    render() {
        const { genres, list } = this.props
        if (!genres[0] || !list.id ) return (<div></div>);
        let genreSections = [];

        // if (list)

        genres.forEach( (genre) => {
            let movies = Object.entries(genre[1])
            let genreName = genre[0]
            let genreSection = (<BrowseGenre key={genreName} genreName={genreName} movies={movies} />)
        })
        // action.forEach( (movie) => {if (movie.title === "Batman Begins") mainMovie = movie } )
        return(
            <div className="browse-container">
                <MainMovieContainer />
            </div>
        )
    }
}


export default Browse;
