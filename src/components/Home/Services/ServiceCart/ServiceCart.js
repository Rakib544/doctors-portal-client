import React from 'react';

const ServiceCart = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={service.img} alt={service.name} style={{height: '50px'}} />
            <h5 className="mt-2 mb-2">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, quidem!</p>
        </div>
    );
};

export default ServiceCart;