import React from "react";
import { Link } from "react-router-dom"
import { GrPlayFill } from "react-icons/gr"

export default class BrowseMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }

        this.handleAddMovieToList = this.handleAddMovieToList.bind(this);
        this.handleRemoveMovieFromList = this.handleRemoveMovieFromList.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.redirectToMovie = this.redirectToMovie.bind(this);
    }

    toggleActive() {
        this.setState({
            active: !this.state.active
        })
    }

    handleAddMovieToList(e) {
        likedMovie = {
            list_id: this.props.list.id,
            // movie_id: 
        }
    }

    handleRemoveMovieFromList(e) {
        this.props.removeMovieFromList()
    }

    redirectToMovie(movieId) {
        this.setState({
            redirectId: movieId
        })
    }
    
    render() {
        const { data, list } = this.props;
        const { id, title, thumbnail, videoUrl, description, icon, content_rating, video_length, year } = data;
        return (
            <div className="browse-movie" onMouseEnter={this.toggleActive} onMouseLeave={this.toggleActive} >
                <div className="browse-movie-container">
                    <img className="browse-thumb" src={thumbnail} />
                    <img className="browse-icon" src={icon}/>
                </div>
                { this.state.active ? <div className="browse-movie-controls">
                    <Link to={{
                        pathname: `/watch/:id`,
                        state: {
                            id: id,
                            tite: title,
                            thumbnail: thumbnail,
                            description: description,
                            videoUrl: videoUrl
                        }
                    }}><GrPlayFill className="browse-play-icon" /></Link>
                </div> : "" }
            </div>
        )
    }
}