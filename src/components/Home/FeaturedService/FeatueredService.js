import React from 'react';
import featuredServiceImage from '../../../images/Mask Group 3.png'

const FeatueredService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featuredServiceImage} alt="feature service" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br /> Care, on Yours Team</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex necessitatibus excepturi delectus, nostrum molestias iure odio nobis corrupti, unde dolorum laborum dolor sunt dolorem. Saepe tempore ex veniam consequuntur error.</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatueredService;