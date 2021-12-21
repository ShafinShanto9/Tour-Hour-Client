import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from 'react-router-dom';

const FeaturedPackage = () => {
    const [services , setService] = useState([])
    useEffect(() => {
        fetch("https://intense-badlands-05606.herokuapp.com/allservice")
          .then((res) => res.json())
          .then((data) => setService(data));
      }, []);
    return (
        <>
            <div style ={{marginTop:"100px"}} className ="container">
            <h1 className = " mb-4">Our Featured Packages</h1>
            {services.length === 0 ? <div  className="d-flex justify-content-center h-100" >
                <Loader
                type="Circles"
                color="#FFCC05"
                height={500}
                width={100}
               
            />
            </div>:<Row xs={1} md={2} className="g-4">
            {
                services.slice(5,7).map( service =>( 
                <Col>
                    <Card className="card mb-3">
                <Row>
                  <Col md ={5} xs ={12} sm ={12}>
                    <Image src={service.image} className="img-fluid w-100 h-100 rounded-start" alt="..."/>
                  </Col>
                  <Col md={7}  xs ={12} sm ={12}>
                    <div className="card-body">
                      <h5 className="card-title">{service.place}
                      <br />
                        <p style= {{fontSize:'15px', marginTop:"5px"}}>
                        <i class="fas fa-stopwatch m-1"></i>{service.Duration}</p>
                      </h5>
                      <p className="card-text">
                          {(service.description).slice(0,120)}</p>
                          <Link to = {`/service/${service._id}`}>
                    <button style={{backgroundColor:"#FFCC05",color:"black"}} className ="p-2 border-0"><i class="fas fa-shopping-basket m-1"></i> Booking Now</button>
                    </Link>
                    </div>
                  </Col>
                </Row> 
                </Card>
                </Col>
              )
                    
                    )
            }
            </Row>}
            </div>
        </>
    );
};

export default FeaturedPackage;