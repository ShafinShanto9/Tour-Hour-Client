import React from 'react';
import NavBar from '../NavBar/NavBar';
import "./Header.css";
const Header = () => {
    return (
        <>
        <div className="banner-container">  
        <NavBar></NavBar>
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-12 align-items-center justify-content-center text-center">
                <h1 className="title">
                    Tour <span className="text-success">Hour</span>
                </h1>   
                <p className = "description-heading">TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER <br/>
                        DON'T MISS THIS OPPORTUNITY</p> 
          </div>
        </div>
      </div>
    </div>   
    </>
    );
};

export default Header;