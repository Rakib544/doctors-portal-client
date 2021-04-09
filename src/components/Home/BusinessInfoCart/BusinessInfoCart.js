import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BusinessCartInfo.css'

const BusinessInfoCart = ({ data }) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center info-container info-${data.background}`}>
                <div className="me-3">
                    <FontAwesomeIcon className="info-icon" icon={data.icon} />
                </div>
                <div>
                    <h6>{data.title}</h6>
                    <small>{data.description}</small>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoCart;