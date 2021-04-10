import React, { useState } from 'react';
import '../../../App.css'
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ date, booking }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-4">
            <div className="card p-3 shadow-sm border-0">
                <div className="card-body text-center">
                    <h4 className="text-brand">{booking.subject}</h4>
                    <h6>{booking.visitHour}</h6>
                    <small>{booking.totalSpace} PLACE AVAILABLE</small>
                    <button onClick={openModal} className="btn btn-brand mt-3">BOOK APPOINTMENT</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;