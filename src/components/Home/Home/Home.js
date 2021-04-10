import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatueredService from '../FeaturedService/FeatueredService';
import Footer from '../../SharedComoponents/Footer/Footer'
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
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;