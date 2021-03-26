import React from "react";
import { Link } from "react-router-dom"
import { GrPlayFill } from "react-icons/gr"
import { FiPlus, FiMinus } from "react-icons/fi"
import { IconContext } from "react-icons"
import { VscMute, VscUnmute } from "react-icons/vsc";

export default class BrowseMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            reload: false,
            muted: true
        }

        this.handleAddMovieToList = this.handleAddMovieToList.bind(this);
        this.handleRemoveMovieFromList = this.handleRemoveMovieFromList.bind(this);
        this.toggleActiveOn = this.toggleActiveOn.bind(this);
        this.toggleActiveOff = this.toggleActiveOff.bind(this);
        this.redirectToMovie = this.redirectToMovie.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    toggleActiveOn() {
        this.setState({
            active: true,
            muted: true
        })
    }

    toggleActiveOff() {
        this.setState({
            active: true,
            muted: true
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
            <IconContext.Provider value={{ color: "white" }} ><FiPlus className="add-btn" onClick={this.handleAddMovieToList}/></ IconContext.Provider>
        )

        list.movie_linkers.forEach( (movieLinker) => {
            if (movieLinker.movie_id === data.id) { 
                listButton = (
                    <IconContext.Provider value={{ color: "white" }} ><FiMinus className="add-btn" onClick={() => this.handleRemoveMovieFromList(movieLinker.id)}/></ IconContext.Provider>
                )
            }
        })

        // debugger

        return (
            <div className="browse-movie" onMouseEnter={this.toggleActiveOn} onMouseLeave={this.toggleActiveOff} >
                <div className="browse-movie-container">
                    { this.state.active ? ( this.state.muted ? <video className="browse-thumb" src={videoUrl} autoPlay muted ></video> : <video className="browse-thumb" src={videoUrl} autoPlay ></video> ) : <img className="browse-thumb" src={thumbnail} />}
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
                    {this.state.muted ? <VscMute className="browse-mute-btn" onClick={this.toggleMute} /> : <VscUnmute className="browse-mute-btn" onClick={this.toggleMute} />}
                </div> : "" }
            </div>
        )
    }
}