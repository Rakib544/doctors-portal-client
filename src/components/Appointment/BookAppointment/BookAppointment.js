import React from 'react';
import BookingCard from './BookingCard';
import '../../../App.css'
const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Teeth Orthodontics',
        visitHour: '9:00 AM - 10:00 AM',
        totalSpace: 20
    },
    {
        id: 3,
        subject: 'Teeth Orthodontics',
        visitHour: '8:00 AM - 9:00 AM',
        totalSpace: 30
    },
    {
        id: 4,
        subject: 'Teeth Orthodontics',
        visitHour: '8:00 AM - 11:00 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitHour: '11:00 AM - 12:00 AM',
        totalSpace: 15
    }
]

const BookAppointment = ({ date }) => {
    return (
        <div>
            <h1 className="text-center text-brand">Available Appointment on {new Date(date).toDateString()}</h1>
            <div className="container mt-3">
                <div className="row">
                    {
                        bookingData.map(booking => <BookingCard key={booking.id} booking={booking} date={date} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;