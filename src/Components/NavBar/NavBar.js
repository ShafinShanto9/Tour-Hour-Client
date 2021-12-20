import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./nav.css";

const NavBar = () => {
  const {logOut , user} = useAuth()
    return (
        <div>
          <Navbar  collapseOnSelect expand="lg" bg="light" >
                    <Container>
                    <Navbar.Brand href="/home">
                    <span className = "text-success nav-text"> Tour Hour</span>
                     </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto p-2">
                        <NavLink className = 'nav-text' to="/home">Home</NavLink>

                        <NavLink className = 'nav-text' to="/allTour">All Tour Packages</NavLink>

                        {user.email &&
                          <NavLink  className = 'nav-text' to="/addservice">Add Package</NavLink>}

                        {user.email &&
                          <NavLink  className = 'nav-text' to="/managepackages">Manage Package</NavLink>}

                        {user.email &&
                          <NavLink  className = 'nav-text' to="/mypackages">My Package</NavLink>}
                          
                        <NavLink  className = 'nav-text' to="/contact">Contact</NavLink>
                        {
                            user.email? <p className='mx-2 nav-text'>{user.displayName}</p> : <p></p> 
                        }
                        { user.email? 
                                <Link to="/login">
                                <button onClick = {logOut} className="btn btn-danger me-2" >Log-out</button>
                                </Link>
                                :
                                <Link to="/login">
                                <button className="btn btn-success me-2" >Log In</button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
        </div>
    );
};

export default NavBar;