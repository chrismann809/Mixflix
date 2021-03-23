import React from 'react';
import { render } from 'react-dom';
import { RiMovie2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';



class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main_ended: false
        }

        this.handleEnded = this.handleEnded.bind(this);
    }

    componentDidMount() {
        this.props.fetchGenres()
    }

    handleEnded() {
        this.setState({
            main_ended: true
        })
    }

    render() {
        if (!this.props.genres[0]) return (<div></div>);
        const mainMovieId = Math.floor(Math.random() * Object.values(this.props.genres[0][1]).length)
        const movie = Object.values(this.props.genres[0][1])[mainMovieId];
        console.log(movie);
        return(
            <div className="browse-container">
                <div className="main-movie-container">
                    <video className="main-movie" src={movie.videoUrl} muted autoPlay onEnded={() => this.handleEnded()}></video>
                    <img className="main-movie-icon" src={movie.icon} />
                </div>
                
                {(this.state.main_ended) ? <img className="main-movie-thumb" src={movie.thumbnail} /> : ""}
            </div>
        )
    }
}


export default Browse;
