import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import Blog from './Blog';
import './Blogs.css'
const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="blog-header text-center">
                    <h5 className="text-primary">OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div> 
                <div className="row mt-5">
                    {
                        blogData.map(blog => <Blog key={blog.title} blog={blog}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;