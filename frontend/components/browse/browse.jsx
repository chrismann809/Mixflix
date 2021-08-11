import React from 'react';
import { render } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-modal";

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

    openModal() {
        setIsOpen(true);
    }

    render() {
        const { genres, list } = this.props
        if (!genres[0] || !list.id ) return (<div></div>);
        let genreSections = [];

        // debugger
        if (list.movies.length >= 1) {
            let movies = []
            // debugger
            list.movies.forEach( (movie) => {
                let movieItem = []
                movieItem.push(movie.title);
                movieItem.push(movie);
                movies.push(movieItem);
                // debugger
            })
            let genreName = "My List";
            // debugger
            let genreSection = (
                <BrowseGenre key={genreName} genreName={genreName} movies={movies} />
            )
            genreSections.push(genreSection);
        }

        genres.forEach( (genre) => {
            let movies = Object.entries(genre[1])
            let genreName = genre[0]
            let genreSection = (
                <BrowseGenre key={genreName} genreName={genreName} movies={movies} />
            )
            genreSections.push(genreSection);
        })

        // action.forEach( (movie) => {if (movie.title === "Batman Begins") mainMovie = movie } )
        return(
            <div className="browse-container">
                <MainMovieContainer />
                <div  className="genre-rows">{genreSections}</div>
            </div>
        )
    }
}


export default Browse;
