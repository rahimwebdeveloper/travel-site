import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>logo</h1>
            </div>
            <div className='nav-bar-list'>
                <div className='mini-nav'>
                    <div>
                        <a>phone #01827251661</a>
                        <a>phone</a>
                        <a>phone</a>
                        <a>phone</a>
                        <a>phone</a>
                        <a>phone</a>
                    </div>
                    <div>
                        <a href="">
                            twitter
                            <img src="" alt="" />
                        </a>
                        <a href="">
                            facebook
                            <img src="" alt="" />
                        </a>
                        <a href="">
                            instagram
                            <img src="" alt="" />
                        </a>
                        <a href="">
                            linkedin
                            <img src="" alt="" />
                        </a>
                    </div>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Blogs</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;