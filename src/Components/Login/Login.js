import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../NavBar/NavBar';
import "./Login";

const Login = () => {
    const {googleSignIn} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const ridirectUrl = location.state?.from || '/home'
    
    const handleGoogleSignin= () =>{
        googleSignIn()
        .then(result=>{
            history.push(ridirectUrl)
        })
    }
    return (
        <>
        <NavBar></NavBar>
        <div className ='d-flex align-items-center justify-content-center mt-5 p-4 h-100 w-100'>   
        <div>
        <Form className = "mt-5">
        <Row>
            <Col >
            <Form.Control className ='form-style' placeholder="Email" />
            </Col>
            <Col>
            <Form.Control className ='form-style' placeholder="Password" />
            </Col>
        </Row>
        </Form>
        <button className="bg-success" style={{width :'100%', marginTop : '15px',padding:'10px',border:'none',color :'white'}}>Submit</button>
        
        <button onClick ={handleGoogleSignin}  className='bg-success border-0 mt-2 px-3 py-2 text-white w-100'>Sign in With Google</button>
        </div>
    </div>
    </>
    );
};

export default Login;