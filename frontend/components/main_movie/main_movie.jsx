import React from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";
import { IconContext } from "react-icons";
import { AiOutlineInfoCircle } from "react-icons/ai"

export default class MainMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            muted: true,
            mainEnded: false
        }

        this.toggleMute = this.toggleMute.bind(this)
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    handleEnded() {
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
        // action.forEach( (movie) => {if (movie.title === "Batman Begins") mainMovie = movie } )
        mainMovie = action["Batman Begins"];
        let muteButton;
        this.state.muted ? muteButton=(<div className="main-mute-off" onClick={this.toggleMute}><VscMute className="main-unmuted-icon"/></div>) 
         : muteButton=(<div className="main-mute-on" onClick={this.toggleMute}><VscUnmute className="main-muted-icon" /></div>)


        return (
            <div>
                <div className="main-movie-container">
                    {this.state.muted ? <video className="main-movie" src={mainMovie.videoUrl} autoPlay muted onEnded={() => this.handleEnded()}></video>
                    : <video className="main-movie" src={mainMovie.videoUrl} autoPlay onEnded={() => this.handleEnded()}></video>}
                </div>
                <img className="main-movie-icon" src={mainMovie.icon} />
                {/* <div className="main-mute" onClick={this.toggleMute()}></div> */}
                <div className="main-movie-buttons">
                    <div className="main-movie-buttons-left">
                        <div className="main-movie-play"><GrPlayFill className="main-play-icon" /><p>Play</p></div>
                        <div className="main-movie-info"><IconContext.Provider value={{color: "white"}}><AiOutlineInfoCircle className="main-info-icon"/></IconContext.Provider><p>More Info</p></div>
                    </div>
                    <div className="main-movie-buttons-right">
                        {muteButton}
                        <div className="main-movie-rating"><p>{mainMovie.content_rating}</p></div>
                    </div>
                </div>
                {/* {(this.state.mainEnded) ? <img className="main-movie-thumb" src={mainMovie.thumbnail} /> : ""} */}
                <img className="main-movie-thumb" src={mainMovie.thumbnail} />

            </div>
        )
    }
}