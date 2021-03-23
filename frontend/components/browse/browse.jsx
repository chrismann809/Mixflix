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
        const movie = Object.values(this.props.genres[0][1])[0];
        console.log(movie);
        return(
            <div>
                <div className="main-movie-container">
                    <video className="main-movie" src={movie.videoUrl} autoPlay muted="true" onEnded={() => this.handleEnded()}></video>
                </div>
                {(this.state.main_ended) ? <div className="main-movie-thumb"></div> : ""}
            </div>
        )
    }
}


export default Browse;
