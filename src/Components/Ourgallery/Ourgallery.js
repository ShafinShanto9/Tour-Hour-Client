import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Ourgallery = () => {
    return (
        <div style ={{marginTop:"100px"}} className = "container">
            <Row>
                <Col xs ={12} md ={6}>
                        <h1 style ={{fontSize : "55px"}}> BEST TRAVELER'S <br/> SHARED PHOTOS</h1>
                        <p>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p>
                </Col>
                <Col xs ={12} md ={3}>
                    <Image src = "https://i.ibb.co/1626755/img13.jpg" fluid></Image>
                </Col>
                <Col xs ={12} md ={3}>
                <Image src = "https://i.ibb.co/0qW7cDp/img14.jpg" fluid></Image>
                </Col>
            </Row>
            <Row className = "mt-4">
                <Col xs ={12} md ={6}>
                    <Image w-100 src = "https://i.ibb.co/WykDPwz/img12.jpg" fluid></Image>
                </Col>
                <Col xs ={12} md ={6}>
                <Image src = "https://i.ibb.co/0r0brsT/img15.jpg" fluid></Image>
                </Col>
            </Row>
        </div>
    );
};

export default Ourgallery;