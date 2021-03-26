import React from "react";
import { Link } from "react-router-dom";
import { GrPlayFill } from "react-icons/gr"
import { FiPlus, FiMinus } from "react-icons/fi"
import { IconContext } from "react-icons"
import { VscMute, VscUnmute } from "react-icons/vsc";

export default class ListMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            muted: true
        }

        this.toggleActiveOff = this.toggleActiveOff.bind(this);
        this,this.toggleActiveOn = this.toggleActiveOn.bind(this);
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
            active: false,
            muted: true
        })
    }

    
    render() {
        const { data, list } = this.props;
        const { id, title, thumbnail, videoUrl, description, icon, content_rating, video_length, year } = this.props;

        // debugger

        return (
            <div className="list-movie" onMouseEnter={this.toggleActiveOn} onMouseLeave={this.toggleActiveOff} >
                <div className="list-movie-container">
                    { this.state.active ? ( this.state.muted ? <video className="list-thumb" src={videoUrl} autoPlay muted ></video> : <video className="list-thumb" src={videoUrl} autoPlay ></video> ) : <img className="list-thumb" src={thumbnail} />}
                    <img className="list-icon" src={icon}/>
                </div>
                { this.state.active ? <div className="list-movie-controls">
                    <Link to={{
                        pathname: `/watch/${id}`,
                        state: {
                            id: id,
                            tite: title,
                            thumbnail: thumbnail,
                            description: description,
                            videoUrl: videoUrl
                        }
                    }}><GrPlayFill className="list-play-icon" /></Link>
                    {this.state.muted ? <VscMute className="list-mute-btn" onClick={this.toggleMute} /> : <VscUnmute className="list-mute-btn" onClick={this.toggleMute} />}
                </div> : "" }
            </div>
        )
    }
}