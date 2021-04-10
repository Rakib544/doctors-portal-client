import React from 'react';
import './Appointment.css'
import doctor from '../../../images/5790-removebg.png';

const MakeAppointment = () => {
    return (
        <div>
            <section className="appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="img-fluid" src={doctor} alt="doctor" />
                        </div>
                        <div className="col-md-7 appointment-text">
                            <h3 className="text-primary mt-4 mb-3">APPOINTMENT</h3>
                            <h1 className="text-white">Make an Appointment <br />Today</h1>
                            <p className="text-white py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex veniam ratione impedit quibusdam rerum.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppointment;