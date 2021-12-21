import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
            <h1 className = " mb-4">Our Latest Packages</h1>
            {services.length === 0 ? <div  className="d-flex justify-content-center h-100" >
                <Loader
                type="Circles"
                color="#FFCC05"
                height={500}
                width={100}
               
            />
            </div>:<Row xs={1} md={3} className="g-4">
            {
                services.slice(3,6).map( service => <Service service ={service}></Service> )
            }
            </Row>}
        </div>
    );
};

export default Services;