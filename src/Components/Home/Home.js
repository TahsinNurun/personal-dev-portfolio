import React from 'react';
import proPic from '../../Images/pro-pic-03.png';
import './Home.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faFacebookSquare, faGithubSquare, faLinkedin, } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <main style={{ height: '100%' }} className="p-3">
            <div className=" home-container pt-5">
                <div className="row d-flex align-item-center">
                    <div className="col-md-8 col-sm-10  ">
                        <div className="d-flex align-item-center justify-content-center">
                            <img src={proPic} alt="" className="img-fluid m-auto"/>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-2 col-sm-10 offset-sm-2 my-5 mx-2">
                        <h5 style={{ color: '#4d4d4d' }}>Hi,I am</h5>
                        <h1 style={{ color: '#4d4d4d', fontWeight: 'bold', fontFamily: 'Raleway' }}>Tahsin</h1>
                        <h3 style={{ color: '#E5E7E9' }}>
                            A { }
                            <Typical
                                steps={['Designer!', 1000, 'Developer!', 1000, 'Dreamer!', 1000]}
                                loop={Infinity}
                                wrapper="b" />
                        </h3>
                        <h2>
                            <a href="https://www.linkedin.com/in/tahsin-nurun/" className="mx-2" style={{ color: '#4d4d4d' }}><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/TahsinNurun" className="mx-2" style={{ color: '#4d4d4d' }}><FontAwesomeIcon icon={faGithubSquare} /></a>
                            <a href="https://www.behance.net/tahsinnurun" className="mx-2" style={{ color: '#4d4d4d' }}><FontAwesomeIcon icon={faBehanceSquare} /></a>
                            <a href="https://www.facebook.com/tahsin.nurun/" className="mx-2" style={{ color: '#4d4d4d' }}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;