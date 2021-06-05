import React from 'react';
import img from '../../Images/dev resume pp.png';
import './Resume.css';


const Resume = () => {
    const headingStyle = {
        fontFamily: 'Raleway',
        color: '#F87431',
        fontWeight: 'bold'
    }
    return (
        <div style={{ backgroundColor: '#F2F3F4 ' }} className="p-5" >
            <section className="container p-5" style={{ backgroundColor: '#F2F3F4 ' }}>
                <div className="d-flex justify-content-center text-secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-8 ">
                                <img src={img} className="img-fluid mx-5 my-5 d-flex anime" style={{ height: 'auto', width: '100%' }} alt="" />
                            </div>
                            <div className="col-md-8 col-sm-12 ml-5 mt-2">
                                <h5 className="pt-3 d-flex justify-content-between " style={{textAlign: 'justify'}}>
                                Hi, I am Tahsin, a curious learner.<br/>I have an interest in photography,  writing and of course designing.I am comfortable in doing responsive multi-page web application using the popular technology like JavaScript, React etc.
                                </h5>
                                <h5 style={{color:'#F87431',textAlign: 'justify'}}>
                                I focus more on the process while designing rather than the end result because I enjoy the excitement of creating something new while brainstorming for my projects. 
                                </h5>
                                <h5 className="pt-3 d-flex justify-content-between mt-2" style={{textAlign: 'justify'}}> So when I reach the milestone, I try to explore more new destinations- as in new designs.
                                </h5>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="mt-2 text-secondary">
                    <h4 style={headingStyle}>Objective</h4>
                    <h6>Every site has its own story to tell. I always try to design a site that portrays an honest reflection of the brand and users can easily navigate it while using it.</h6>
                </div>
                <div className="mt-2 text-secondary">
                    <h4 style={headingStyle}>Skill</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-10">
                                <ul style={{ fontFamily: 'roboto' }}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-10">
                                <ul style={{ fontFamily: 'roboto' }}>
                                    <li>React.js</li>
                                    <li>firebase</li>
                                    <li>netlyfy</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-10">
                                <ul style={{ fontFamily: 'roboto' }}>
                                    <li>heroku</li>
                                    <li>stripe</li>
                                    <li>React.js</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-10">
                                <ul style={{ fontFamily: 'roboto' }}>
                                    <li>Adobe photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>AutoDesk AutoCAD</li>
                                    <li>AutoDesk sketchbook</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-secondary">
                    <h4 style={headingStyle} >Co-curricular Activities/Interest</h4>
                    <h6>Worked as student contributor in <a style={{color:'#F87431'}} href="https://contextbd.com/">Contextbd</a> (Aug 2015-April 2017)<br />Published 3 news about University activities, reported about the visit of famous Architect M K Palash in Chittagong<br/> Divisional graduate outreach coordinator at <a style={{color:'#F87431'}} href="https://bgn.bylc.org/">BGN</a> (Sep 2017- Sep 2018). <br />planned, organized and coordinated graduate engagement activities with other three
                    members.<br />Hobby- reading books, watching documentaries, photography, painting.</h6>
                </div>
                <div className="mt-2 text-secondary">
                    <h4 style={headingStyle}>Education</h4>
                    <h6>Graduated in Bachelor of Architecture degree(5 years) from Chittagong University of Engineering and Technology in 2017</h6>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1EYfQ0h_RctiJI_oVQMGLrqvjBE0Gm3IU" role="button" target="_blank" className="btn btn-warning" style={{ backgroundColor: '#F87431' }}>Download Resume</a>
                <p  className="text-center mt-5">copyright @ Tahsin Nurun. All rights reserved.</p>
            </section>
        </div>
    );
};

export default Resume;