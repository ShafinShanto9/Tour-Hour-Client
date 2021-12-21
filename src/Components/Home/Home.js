import React from 'react';
import Clients from '../Clients/Clients';
import FeaturedPackage from '../FeaturedPackage/FeaturedPackage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Ourgallery from '../Ourgallery/Ourgallery';
import Services from '../Services/Services';
import TopNavBar from '../TopNavBar/TopNavBar';
import WhyChose from '../WhyChose/WhyChose';

const Home = () => {
    return (
        <div>
            <TopNavBar></TopNavBar>
            <Header></Header>
            <WhyChose></WhyChose>
            <Ourgallery></Ourgallery>
            <Services></Services>
            <Clients></Clients>
            <FeaturedPackage></FeaturedPackage>
            <Footer></Footer>
        </div>
    );
};

export default Home;