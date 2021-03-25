import React from "react";

export default class MoviePlayer extends React.Component {
    constructor(props) {
        super(props)
        const { title, description, videoUrl } = this.props.location

        this.state = {
            title: title,
            description: description,
            videoUrl: videoUrl
        }
    }
    
    render() {
        // debugger
        return (
            <div className="video-container">
                <video className="video" src={this.props.location.state.videoUrl} autoPlay/>
            </div>
        )
    }
}