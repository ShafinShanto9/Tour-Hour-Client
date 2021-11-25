import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../NavBar/NavBar';

const Booking = () => {
    const {serviceId} = useParams()
    const [serviceDetails , setDetails] = useState([])

    useEffect(()=>{
        fetch("https://intense-badlands-05606.herokuapp.com/allservice")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    
    const itemFound = serviceDetails.filter(details => details._id === serviceId)
    console.log(itemFound)
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const {user} = useAuth()
    const onSubmit=(data) => {
        data.place = itemFound[0]?.place
        data.email = user?.email;
        fetch("https://intense-badlands-05606.herokuapp.com/booking",{
            method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => console.log(result))
        console.log(data)
    }
    return (
        <>
        <NavBar></NavBar>
        <Row>
            <Col xs ={12} md ={6}> 
                <div className = "container mt-5 text-center">
                <h1>Booking {itemFound[0]?.place}</h1>
                <Image src ={itemFound[0]?.image} fluid></Image>
                <p className='mt-2'>{itemFound[0]?.description}</p>
                </div>
             </Col>
            <Col xs ={12} md = {6}>
            <h1 className="mt-5 text-center text-success">Happy Enroll</h1>
      <div className=" m-auto mt-5">
        <div className="event-box  d-flex justify-content-center align-items-center">
          <div className="login-form">
            <h2><span className="text-success">Booking From</span> {user.email}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                        
                <input
                            {...register("name")}
                            placeholder="full name"
                            className="p-2 m-2 w-100"
                        /> 
                        <br />
                <input
                            {...register("adress")}
                            placeholder="adress"
                            className="p-2 m-2 w-100"              
                        />
                        <br />
                 <input
                        type ="number"
                            {...register("mobile")}
                            placeholder="mobile number"
                            className="p-2 m-2 w-100"         
                        />
                        <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" value="Enroll Now" className="btn btn-success w-100 " />
            </form>
          </div>
        </div>
      </div>
            </Col>
        </Row>
        </>
    );
};

export default Booking;