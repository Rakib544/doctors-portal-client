import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import ema from '../../../images/Ellipse 2.png'
import aliza from '../../../images/Ellipse 3.png'
import Testimonial from './Testimonial';
import './Testimonials.css'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]


const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary">TESTIMONIALS</h5>
                    <h1>What Our Patients <br /> says</h1>
                </div>
                <div className="row mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;