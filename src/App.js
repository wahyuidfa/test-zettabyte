import logo from "./logo.svg";
import "./App.css";
import image1 from "./image1.jpg";
import ava from "./baifern.jpg";
import Avatar from "@mui/material/Avatar";
import heart from "./heart-solid.svg";
import location from "./map-marker-alt-solid.svg";
import bookmark from "./bookmark-solid.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import React from "react";

function App() {
    const [isOpen, setIsOpen] = useState();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        // <React.Fragment>
            <div className="App">
                <div className="container">
                    <div className="divbox1" onClick={openModal}>
                        <div className="imgContainer">
                            <img className="imgPoster" src={image1} alt="test" />
                        </div>
                        <div className="info">
                            <h2>Top Winter Loactions</h2>
                            <p>More than 200 locations</p>
                        </div>
                        <div className="description">
                            <p>
                                Cards provide context and an entry point to more rabust information
                                and views, and their content and quantity can vary greatly
                            </p>
                        </div>
                        <div className="share">
                            <p className="sharetext">Share</p>
                            <p className="exploretext">Explore</p>
                        </div>
                        <Modal
                            keepMounted
                            open={isOpen}
                            onClose={closeModal}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <div className={"containerModal"}>
                                <Box>
                                    <div className="divbox1modal">
                                        <div className="imgContainer">
                                            <img className="imgPoster" src={image1} alt="test" />
                                        </div>
                                        <div className="info">
                                            <h2>Top Winter Loactions</h2>
                                            <p>More than 200 locations</p>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Cards provide context and an entry point to more
                                                rabust information and views, and their content and
                                                quantity can vary greatly
                                            </p>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </Modal>
                    </div>
                    <div className="divbox2">
                        <div className="imgContainer">
                            <img className="imgPoster" src={image1} alt="test" />
                        </div>
                        <div className="info">
                            <h2>Top Winter Loactions</h2>
                            <p>More than 200 locations</p>
                        </div>
                        <div className="share">
                            <p className="sharetext">Share</p>
                            <p className="exploretext">Explore</p>
                        </div>
                        <Modal
                            keepMounted
                            open={isOpen}
                            onClose={closeModal}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <div className={"containerModal"}>
                                <Box>
                                    <div className="divbox1modal">
                                        <div className="imgContainer">
                                            <img className="imgPoster" src={image1} alt="test" />
                                        </div>
                                        <div className="info">
                                            <h2>Top Winter Loactions</h2>
                                            <p>More than 200 locations</p>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Cards provide context and an entry point to more
                                                rabust information and views, and their content and
                                                quantity can vary greatly
                                            </p>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </Modal>
                    </div>
                    <div className="divbox3">
                        <div className="avatar">
                            <Avatar className="ava" alt="Remy Sharp" src={ava} />
                            <div className="nameWrapper">
                                <h4 className="nametext">Christy</h4>
                                <p className="timetext">20 Minute ago</p>
                            </div>
                        </div>
                        <div className="imgContainer">
                            <img className="imgPoster" src={image1} alt="test" />
                        </div>
                        <div className="info">
                            <h2>Top Winter Loactions</h2>
                            <p>More than 200 locations</p>
                        </div>
                        <div className="description">
                            <p>
                                Cards provide context and an entry point to more rabust information
                                and views, and their content and quantity can vary greatly
                            </p>
                        </div>
                        <div className="share">
                            <p className="sharetext">Share</p>
                            <p className="exploretext">Explore</p>
                        </div>
                    </div>
                    <div className="divbox4">
                        <div className="imgContainer">
                            <img className="imgPoster" src={image1} alt="test" />
                        </div>

                        <div className="share4">
                            <img className="sharetext4" src={heart} alt="heart" />
                            <img className="bookmarktext" src={bookmark} alt="bookmark" />
                            <img className="locationtext" src={location} alt="loc" />
                        </div>
                    </div>
                </div>
            </div>
        /* </React.Fragment> */
    );
}

export default App;
