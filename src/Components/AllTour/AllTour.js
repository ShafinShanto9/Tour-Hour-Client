import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Service from '../Service/Service';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AllTour = () => {
    const [tour , setTour] = useState([])
    useEffect(() => {
        fetch("https://intense-badlands-05606.herokuapp.com/allservice")
          .then((res) => res.json())
          .then((data) => setTour(data));
      }, []);
    return (
        <div>
            <NavBar></NavBar>
          <div style ={{marginTop:"40px"}} className ="container">
            <h1 className = "text-center mb-4">Our <span className="text-success">Packages</span> </h1>

           {tour?.length === 0 ? <div  className="d-flex justify-content-center h-100" >
                <Loader
                type="Circles"
                color="green"
                height={500}
                width={100}
               
            />
            </div>:<Row xs={1} md={3} className="g-4">
            {
                tour.map( service => <Service service ={service}></Service> )
            }
            </Row>}
        </div>
        </div>
    );
};

export default AllTour;