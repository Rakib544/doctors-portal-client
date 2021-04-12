import React, { useState } from 'react';
import Navbar from '../../SharedComoponents/Navbar/Navbar';
import Footer from '../../SharedComoponents/Footer/Footer'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
    const handleDateChange = date => {
        setSelectedDate(new Date(date).toDateString())
    }
    return (
        <div>
            <Navbar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate} />
            <Footer />
        </div>
    );
};

export default Appointment;