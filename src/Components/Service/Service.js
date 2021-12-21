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
                    <p style={{color:"black"}}>BDT : <i class="fas fa-hand-holding-usd m-1"></i> {service.price} taka</p>
                    </Card.Body>
                    <Card.Footer className = "d-flex justify-content-between allign-item-center">
                    <p className ="mt-2">Duration :   <i class="fas fa-stopwatch m-1"></i> {service.Duration}</p>
                    <Link to = {`/service/${service._id}`}>
                    <button style={{backgroundColor:"#FFCC05",color:"black"}} className =" p-2 border-0"><i class="fas fa-shopping-basket m-1"></i> Booking Now</button>
                    </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;