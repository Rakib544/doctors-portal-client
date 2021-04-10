import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { quote, name, from, img } = testimonial;
    return (
        <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="card-text text-center">{quote}</p>
                </div>
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={img} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;