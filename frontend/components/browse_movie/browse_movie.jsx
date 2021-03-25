import React from "react";
import { Link } from "react-router-dom"
import { GrPlayFill } from "react-icons/gr"
import { FiPlus, FiMinus } from "react-icons/fi"
import { IconContext } from "react-icons"

export default class BrowseMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            reload: false
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
        const likedMovie = {
            list_id: this.props.list.id,
            movie_id: this.props.data.id
        }
        this.props.addMovieToList(likedMovie);
        window.location.reload();
    }

    handleRemoveMovieFromList(movieLinkerId) {
        this.props.removeMovieFromList(movieLinkerId)
        window.location.reload();
    }

    redirectToMovie(movieId) {
        this.setState({
            redirectId: movieId
        })
    }
    
    render() {
        const { data, list } = this.props;
        const { id, title, thumbnail, videoUrl, description, icon, content_rating, video_length, year } = data;

        let listButton = (
            <IconContext.Provider value={{ color: "black" }} ><FiPlus className="add-btn" onClick={this.handleAddMovieToList}/></ IconContext.Provider>
        )

        list.movie_linkers.forEach( (movieLinker) => {
            if (movieLinker.movie_id === data.id) { 
                listButton = (
                    <IconContext.Provider value={{ color: "black" }} ><FiMinus className="add-btn" onClick={() => this.handleRemoveMovieFromList(movieLinker.id)}/></ IconContext.Provider>
                )
            }
        })

        // debugger

        return (
            <div className="browse-movie" onMouseEnter={this.toggleActive} onMouseLeave={this.toggleActive} >
                <div className="browse-movie-container">
                    <img className="browse-thumb" src={thumbnail} />
                    <img className="browse-icon" src={icon}/>
                </div>
                { this.state.active ? <div className="browse-movie-controls">
                    <Link to={{
                        pathname: `/watch/${id}`,
                        state: {
                            id: id,
                            tite: title,
                            thumbnail: thumbnail,
                            description: description,
                            videoUrl: videoUrl
                        }
                    }}><GrPlayFill className="browse-play-icon" /></Link>
                    {listButton}
                </div> : "" }
            </div>
        )
    }
}