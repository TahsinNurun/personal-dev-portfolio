import React from 'react';
import logo from '../../Images/logo.png';
import '../../App.css'

const Navbar = () => {
    const navStyle={
        backgroundColor: 'silver',
        color:'white',
        borderRadius:"5px",
        margin: '3px'
    }
    return (
        <div className="container " style={{ height: '100px' }}>
        <div className="row">
            <div className="col-md-2 col-sm-12">
                <img style={{ height: '30%' }} src={logo} alt="" />
            </div>
            <div className="col-md-10 col-sm-12 ">
                <ul className="nav justify-content-end m-2">                    
                    <li className="nav-item">
                        <a className="nav-link ms-7" href="/" style={navStyle}>HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-7" href="/projects" style={navStyle}>PROJECTS</a>
                    </li>
                    <li className="nav-item ms-7">
                        <a className="nav-link" href="/blogs" style={navStyle}>BLOGS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-7" href="/resume" style={navStyle}>RESUME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-7" href="/contactMe" style={navStyle}>CONTACT ME</a>
                    </li>                   
                </ul>
            </div>
        </div>
    </div >
    );
};

export default Navbar;