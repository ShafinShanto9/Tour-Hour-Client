import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ( {service} ) => {
    return (
        <div>
            <Col>
            <Card>
                    <Card.Img variant="top" src={service.image} fluid  />
                    <Card.Body>
                    <Card.Title>{service.place}</Card.Title>
                    <Card.Text>
                            {(service.description).slice(0,150)}
                    </Card.Text>
                    <p className = "text-success ">BDT : {service.price} taka</p>
                    </Card.Body>
                    <Card.Footer className = "d-flex justify-content-between allign-item-center">
                    <p className ="mt-2">Duration : {service.Duration}</p>
                    <Link to = {`/service/${service._id}`}>
                    <button className ="bg-success text-white px-4 py-2 border-0">Booking Now</button>
                    </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;