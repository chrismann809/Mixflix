import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default class MoviePlayer extends React.Component {
    constructor(props) {
        super(props)
        const { title, description, videoUrl } = this.props.location

        this.state = {
            title: title,
            description: description,
            videoUrl: videoUrl,
            paused: false,
            muted: false
        }

        this.video;

        this.toggleMute = this.toggleMute.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidMount() {
        this.video = document.getElementById("video");
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

    render() {
        // debugger
        return (
            <div className="video-container">
                { this.state.muted ?  <video id="video" src={this.props.location.state.videoUrl} autoPlay muted onClick={this.togglePlay} /> : <video id="video" src={this.props.location.state.videoUrl} autoPlay onClick={this.togglePlay} /> }
                {/* <video id="video" src={this.props.location.state.videoUrl} autoPlay/> */}
            </div>
        )
    }
}