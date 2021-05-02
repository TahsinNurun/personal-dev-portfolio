import React from 'react';
import logo from '../../Images/logo.png';
import '../../App.css'

const Navbar = () => {
    return (
        <div className="container " style={{ height: '100px' }}>
        <div className="row">
            <div className="col-md-2 col-sm-12">
                <img style={{ height: '30%' }} src={logo} alt="" />
            </div>
            <div className="col-md-10 col-sm-12 ">
                <ul className="nav justify-content-end m-2">                    
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="/projects">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="/blogs">BLOGS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="/resume">RESUME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="/contactMe">CONTACT ME</a>
                    </li>                   
                </ul>
            </div>
        </div>
    </div >
    );
};

export default Navbar;