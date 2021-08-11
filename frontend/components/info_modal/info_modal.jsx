import React, { useState } from "react"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { IconContext } from "react-icons"
import Modal from "react-modal"

const InfoModal = ({title, description, genre_id, year, video_length, videoUrl, logo, thumbnail, content_rating}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    console.log(videoUrl);
    return (
        <div className="info-modal">
            <div className="main-movie-buttons"><div className="main-movie-info"><IconContext.Provider value={{color: "white"}}><AiOutlineInfoCircle className="main-info-icon"/></IconContext.Provider><button className="modal-button" onClick={() => setModalIsOpen(true)}>More Info</button></div></div>
            <Modal className="modal" appElement={document.getElementById('root')}
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div>
                    <button className="close-modal" onClick={() => setModalIsOpen(false)}>X</button>
                </div>
                <video className="modal-movie" src={videoUrl} autoPlay muted></video>
                <img id="modal_logo" src={logo} alt=""/>
                <div className="modal-info">
                    <p id="modal_year">{year}</p>
                    <p id="modal_length">{video_length}</p>
                    <p id="modal_desc">{description}</p>
                </div>
                
            </Modal>
        </div>
    )
}

export default InfoModal;