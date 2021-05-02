import React from 'react';
import proPic from '../../Images/pro-pic.png';
import './Home.css'

const Home = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-item-center home-container">
                <div className="col-md-6 col-sm-12 ">
                    <img src={proPic} alt="" className="img-fluid"/>
                </div>
            <div className="d-flex align-item-center">
                <div className="col-md-4 offset-md-1 col-sm-12 ">
                    <h5>Hi,I am</h5>
                    <h1 style={{ color: 'black' }}>Tahsin</h1>
                    <h5>Designer, <br />Developer, <br /> Dreamer</h5>
                    <button className="btn btn-warning" style={{ backgroundColor: '#F87431' }}><a href="/contactMe">Contact Me</a></button>
                </div>
            </div>
        </main>
    );
};

export default Home;