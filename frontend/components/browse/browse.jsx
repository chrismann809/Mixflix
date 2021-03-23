import React from 'react';
import { render } from 'react-dom';
import { RiMovie2Fill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';



class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainEnded: false
        }

        this.handleEnded = this.handleEnded.bind(this);
    }

    componentDidMount() {
        this.props.fetchGenres()
    }

    handleEnded(mainMovie) {
        this.setState({
            mainEnded: true
        })
    }

    render() {
        const { genres } = this.props
        if (!genres[0]) return (<div></div>);
        let action
        genres.forEach( (genre) => {if (genre[0] === "Action") action = genre[1] } )
        let mainMovie;
        mainMovie = action["Batman Begins"];
        mainMovie = Object.values(this.props.genres[0][1])[mainMovie.id];
        return(
            <div className="browse-container">
                <div className="main-movie-container">
                    <video className="main-movie" src={mainMovie.videoUrl} muted autoPlay onEnded={() => this.handleEnded(mainMovie)}></video>
                    <img className="main-movie-icon" src={mainMovie.icon} />
                </div>
                
                {(this.state.mainEnded) ? <img className="main-movie-thumb" src={mainMovie.thumbnail} /> : ""}
            </div>
        )
    }
}


export default Browse;
