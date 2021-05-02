import React from 'react';
import proPic from '../../Images/pro-pic.png';
import './Home.css'

const Home = () => {
    return (
        <main style={{ height: '10rem' }} className="">
            <div className="container home-container">
                <div className="row d-flex align-item-center">
                    <div className="col-md-7 col-sm-12 ">
                        <img src={proPic} alt="" className="img-fluid my-5 mx-1"/>
                    </div>
                    <div className="col-md-3 offset-md-2 col-sm-12 my-5 mx-1">
                        <h5>Hi,I am</h5>
                        <h1 style={{ color: 'black' }}>Tahsin</h1>
                        <h5>Designer, <br />Developer, <br /> Dreamer</h5>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;