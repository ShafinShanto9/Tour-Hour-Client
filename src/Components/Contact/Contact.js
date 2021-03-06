import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

const Contact = () => {
    return (
         <>
        <NavBar></NavBar>
        <div className ="container mt-5">
        <h1>Contact Us....</h1>
        <Row className ="mt-5">
            <Col xs ={12} md ={6}>
            <Form>
            <Row>
                <Col>
                <Form.Control className ='form-style'  placeholder="Name" />
                <Form.Control  className ='form-style' placeholder="Email" />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                   
                </Col>
            </Row>
            </Form>
            </Col>
            <Col xs ={12} md ={6}>
                <div className="mx-4 border-2">
                    <h2>We are here for help you! Arrange a meeting.</h2>
                    <h4 className='text-primary mt-3'>Our Location</h4>
                    <p>374 William S Canning Blvd, Fall River MA 2721 </p>
                    <h4 className='text-primary mt-3'>Customer Supports</h4>
                    <h3>(880) 3695 25423 </h3>
                </div>
            </Col>
        </Row>
    </div>
    </>
    );
};

export default Contact;