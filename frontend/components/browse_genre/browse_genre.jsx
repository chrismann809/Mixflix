import React from "react";

import BrowseMovieContainer from "../browse_movie/browse_movie_container"

export default class BrowseGenre extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    componentDidMount() {
        this.mounted = true;
    }

    render() {
        const { genreName, movies } = this.props;

        let browseMovies = [];

        movies.forEach( (movie) => {
            let movieTitle = movie[0]
            let movieData = movie[1]
            let browseMovie = (
                <BrowseMovieContainer key={movieData.id} data={movieData} />
            )
            browseMovies.push(browseMovie);
        })

        return (
            <div className="genre-row">  
                <label className={movies.length > 6 ? "browse-left-label" : "browse-left-label browse-dummy"} htmlFor={`browse-movie-${genreName}-left`}></label>
                <input type="radio" id={`browse-movie-${genreName}-left`} className="browse-movie-left" name={`browse-arrow-${genreName}`} checked/>
                <label className={movies.length > 6 ? "browse-right-label" : "browse-right-label browse-dummy"} htmlFor={`browse-movie-${genreName}-right`}></label>
                <input type="radio" id={`browse-movie-${genreName}-right`} className="browse-movie-right" name={`browse-arrow-${genreName}`}/>
                <h1 className="genre-title">{genreName}</h1>
                <div className="browse-movies">{browseMovies}</div>
            </div>
        )
    }

}