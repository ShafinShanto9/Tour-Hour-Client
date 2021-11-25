import React from 'react';
import { Image } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className ="container">
            <div>
            <Image className="errorImg" src = 'https://i.ibb.co/w0fMzhX/error.jpg'></Image>
            </div>
        </div>
        </div>
    );
};

export default NotFound;