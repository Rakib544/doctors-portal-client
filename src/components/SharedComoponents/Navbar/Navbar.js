import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse "  id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item ms-5">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a className="nav-link" href="#">Dental Services</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a className="nav-link text-white" href="#">Reviews</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a className="nav-link text-white" href="#">Blogs</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a className="nav-link text-white" href="#">Contact Us</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;