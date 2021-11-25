import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setService] = useState([])
    useEffect(() => {
        fetch("https://intense-badlands-05606.herokuapp.com/allservice")
          .then((res) => res.json())
          .then((data) => setService(data));
      }, []);
      
    return (
        <div style ={{marginTop:"100px"}} className ="container">
            <h1 className = "text-center mb-4">Our <span className="text-success">Packages</span> </h1>
            <Row xs={1} md={3} className="g-4">
            {
                services.map( service => <Service service ={service}></Service> )
            }
            </Row>
        </div>
    );
};

export default Services;