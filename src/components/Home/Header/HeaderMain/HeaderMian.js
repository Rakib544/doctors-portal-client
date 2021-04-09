import React from 'react';
import chair from '../../../../images/Mask Group 4.png';

const HeaderMian = () => {
    return (
        <main style={{height: '500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit itaque et minus repellendus voluptatibus veniam accusantium porro necessitatibus culpa?
                </p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid" alt="chair" />
            </div>
        </main>
    );
};

export default HeaderMian;