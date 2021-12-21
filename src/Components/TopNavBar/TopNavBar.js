import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TopNavBar = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'black', height:"41px", fontSize:"15px", color:'white'}} variant="dark">
            <Container>
            <Navbar.Brand style={{fontSize:"20px"}} href="#home">+880174561005
            <i style={{backgroundColor:"#FFCC05",color:"black" , margin:"5px", fontSize:"25px"}} class="fas fa-phone-square"></i>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link style={{color:"white" , marginLeft:"60px"}} href="#pricing"> <i style={{color:"#FFCC05",}} class="fas fa-map-marker-alt"></i> Jashore Khulna Bangladesh</Nav.Link>

                <Nav.Link style={{color:"white" , marginLeft:"80px"}} href="#pricing"> <i style={{color:"#FFCC05"}} class="far fa-clock"></i> Mon – Sat 8.00 – 18.00</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">
                <i class="fab fa-facebook-f m-3" style={{color:"#FFCC05" , fontSize:"20px"}}></i>
                <i class="fab fa-linkedin-in  m-3" style={{color:"#FFCC05", fontSize:"20px"}}></i>
                <i class="fab fa-instagram  m-3" style={{color:"#FFCC05", fontSize:"20px"}}></i>
                <i class="fab fa-youtube  m-3" style={{color:"#FFCC05", fontSize:"20px"}}></i>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default TopNavBar;