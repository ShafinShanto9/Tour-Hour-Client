import React from 'react';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Ourgallery from '../Ourgallery/Ourgallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Ourgallery></Ourgallery>
            <Services></Services>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;