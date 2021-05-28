import React from "react";
import { BsFillPlayFill, BsFillPauseFill, BsFillVolumeUpFill, BsFillVolumeMuteFill, BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import ProgressBar from "./progress_bar"

export default class MoviePlayer extends React.Component {
    constructor(props) {
        super(props)
        const { title, description, videoUrl } = this.props.location

        this.state = {
            title: title,
            description: description,
            videoUrl: videoUrl,
            paused: false,
            muted: false,
            fullscreen: false,
        }

        this.video;

        this.toggleMute = this.toggleMute.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidMount() {
        this.video = document.getElementById("video");
        this.element = document.documentElement;
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }
    
    togglePlay() {
        this.state.paused ? this.video.play() : this.video.pause();

        this.setState({
            paused: !this.state.paused
        })
    }

    toggleFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }

        this.setState({
            fullscreen: !this.state.fullscreen
        })
    }

    render() {
        // debugger
        return (
            <div className="video-container">
                { this.state.muted ?  <video id="video" src={this.props.location.state.videoUrl} autoPlay muted onClick={this.togglePlay} /> : <video id="video" src={this.props.location.state.videoUrl} autoPlay onClick={this.togglePlay} /> }
                {/* <video id="video" src={this.props.location.state.videoUrl} autoPlay/> */}
                <div>
                    <ProgressBar />
                </div>
                <div className="video-controls">
                    { this.state.paused ? <BsFillPlayFill className="video-play" onClick={this.togglePlay} /> : <BsFillPauseFill className="video-play" onClick={this.togglePlay} /> }
                    { this.state.muted ? <BsFillVolumeMuteFill className="video-volume" onClick={this.toggleMute} /> : <BsFillVolumeUpFill className="video-volume" onClick={this.toggleMute} /> }
                    { this.state.fullscreen ? <BsFullscreenExit className="video-fullscreen" onClick={this.toggleFullscreen} /> : <BsFullscreen className="video-fullscreen" onClick={this.toggleFullscreen} /> }
                </div>
            </div>
            
        )
    }
}