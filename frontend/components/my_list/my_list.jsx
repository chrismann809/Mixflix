import React from "react";
import ListMovie from "../list_movie/list_movie"

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movies } = this.props.list
        
        // debugger

        let listMovies = []

        movies.forEach( (movie) => {
            let { id, title, icon, thumbnail, videoUrl } = movie;
            // debugger
            let listMovie = < ListMovie key={id} id={id} title={title} icon={icon} thumbnail={thumbnail} videoUrl={videoUrl} />
            listMovies.push(listMovie);
        })

        return (
            <div>
                <h1 className="list-title">My List</h1>
                <div className="list-movies">
                    {listMovies}
                </div>
            </div>
            
        )
    }
}