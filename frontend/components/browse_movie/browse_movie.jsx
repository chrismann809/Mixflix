import React from "react";
import Link from "react-router-dom"
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
    
    render() {
        const { data, list } = this.props;
        const { id, title, thumbnail, description, icon, content_rating, video_length, year } = data;
        const link = (
            <div></div>
        )
        // debugger
        return (
            <div className="browse-movie" onMouseEnter={this.toggleActive} onMouseLeave={this.toggleActive} >
                <div className="browse-movie-container">
                    <img className="browse-thumb" src={thumbnail} />
                    <img className="browse-icon" src={icon}/>
                </div>
                
            </div>
        )
    }
}