import React from 'react';
import chair from '../../../images/Mask Group 4.png';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({ handleDateChange }) => {
   
    return (
        <main style={{ height: '500px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid" alt="chair" />
            </div>
        </main>
    );
};

export default AppointmentHeader;