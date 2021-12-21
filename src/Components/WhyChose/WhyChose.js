import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
const fakeData =[
    {
        "id" : "1",
        "title" : "Best Selections",
        "icon" : "fas fa-map-marked-alt",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
    },
    {
        "id" : "2",
        "title": "Reasonable Price",
        "icon" : "fas fa-percent",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
    },
    {
        "id" : "3",
        "title":'Secure Payments',
        "icon" : "fas fa-credit-card",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
    },
    {
        "id" : "4",
        "title":"Secure Payments",
        "icon" : "fas fa-headset",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
    }
]
const WhyChose = () => {
    return (
            <Container fluid className='mt-5'>
                <Row xs={1} md={4} className="g-4">
                {
                fakeData.map(fake =>(
                        <Col>
                <Card className="p-4">
                    <Card.Img variant="top" />
                    <div style={{borderRadius:"50%" , border:"1px solid yellow"}}>
                    <i  style={{borderRadius:"50%", backgroundColor:"#FFCC05", fontSize:"25px",padding:"20px", color:"black"}} class={fake.icon}></i>
                    </div>
                    <Card.Body>
                    <Card.Title>{fake.title}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                ))
                }
            </Row>
            </Container>
    );
};

export default WhyChose;