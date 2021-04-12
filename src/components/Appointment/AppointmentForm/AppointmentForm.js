import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        data.appointmentOn = appointmentOn;
        data.appointmentDate = date;
        data.appointmentCreated = new Date();
        fetch('http://localhost:8080/addAppointment',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                closeModal()
                alert('Appointment created successfully')
            }
        })
        
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <h6 className="text-center">{new Date(date).toDateString()}</h6>
                <form onSubmit={handleSubmit(onSubmit)} className="p-3">
                    <div className="form-group my-3">
                        <input name="name" placeholder="Enter Name" className="form-control" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group my-3">
                        <input name="phone" placeholder="Number" className="form-control" ref={register({ required: true })} />
                        {errors.phone && <span>This field is required</span>}
                    </div>
                    <div className="form-group my-3">
                        <input name="email" placeholder="Email" className="form-control" ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-group row my-3">
                        <div className="col-4">
                            <select className="form-control" name="gender" ref={register({ required: true })}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="not set">Not Set</option>
                            </select>
                            {errors.gender && <span>This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="text" placeholder="Your Age" name="age" className="form-control" ref={register({required: true})} />
                            {errors.age && <span>This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="text" placeholder="Your Weight" name="weight" className="form-control" ref={register({required: true})} />
                            {errors.weight && <span>This field is required</span>}
                        </div>
                    </div>
                    <button className="btn btn-brand ms-auto d-block my-3">SEND</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;