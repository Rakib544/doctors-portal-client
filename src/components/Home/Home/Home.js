import React from 'react';
import FeatueredService from '../FeaturedService/FeatueredService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatueredService />
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;