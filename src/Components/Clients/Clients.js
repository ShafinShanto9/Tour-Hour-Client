import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Clients = () => {
    return (
        <div className = "mt-5 container p-5"> 
        <h1 className="text-center"> Our <span className = "text-success">Happy</span> Clients</h1>
            <Row className = "mt-5">
                <Col xs = {12} md = {4}>
                    <Image className = "center m"  src = "https://i.ibb.co/Pck127G/3.jpg w-100"></Image>
                    <p className = "mt-2">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."</p>
                </Col>
                <Col xs = {12} md = {4}>
                <Image className = "center "  src = "https://i.ibb.co/vqpGjdg/2.jpg w-100"></Image>
                    <p className = "mt-2">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."</p>

                </Col>
                <Col xs = {12} md = {4}>
                <Image className = "center border-4 rounded-4"  src = "https://i.ibb.co/vLv0KK0/1.jpg w-100"></Image>
                    <p className = "mt-2">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."</p>

                </Col>
            </Row>
       </div>
    );
};

export default Clients;