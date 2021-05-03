import React from 'react';


const Resume = () => {
    return (
        <div style={{ backgroundColor: '#DCDCDC' }} className="p-5 " >
            <section className="container p-5" style={{ backgroundColor: '#DCDCDC' }}>
                <div className="d-flex justify-content-center text-secondary">
                    <h6 className="w-75 pt-7 ">Hi, I am Tahsin, a curious learner. I have an interest in photography,  writing and of course designing.I am comfortable in doing responsive multi-page web application using the popular technology like JavaScript, React etc.
                    I focus more on the process while designing rather than the end result because I enjoy the excitement of creating something new while brainstorming for my projects. I love the journey more than the destination. So when I reach the milestone, I try to explore more new destinations- as in new designs.</h6>
                </div>
                <div className="mt-2 text-secondary">
                    <h5>Objective</h5>
                    <p>Every site has its own story to tell. I always try to design a site that portrays an honest reflection of the brand and users can easily navigate it while using it.</p>
                </div>
                <div className="mt-2 text-secondary">
                    <h5>Skill</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-10">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Material UI</li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-10">
                                <ul>
                                    <li>firebase</li>
                                    <li>netlyfy</li>
                                    <li>heroku</li>
                                    <li>stripe</li>
                                    <li>React.js</li>
                                    <li>Material UI</li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-10">
                                <ul>
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
                    <h5 >Co-curricular Activities/Interest</h5>
                    <p>Worked as student contributor in Contextbd (Aug 2015-April 2017), divisional graduate outreach coordinator at BGN (Sep 2017- Sep 2018). <br />Hobby- reading books, watching documentaries, photography, painting.</p>
                </div>
                <div className="mt-2 text-secondary">
                    <h5>Education</h5>
                    <p>Graduated in Bachelor of Architecture degree(5 years) from Chittagong University of Engineering and Technology in 2017</p>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1UsXlfWoy_MkGaHur0pM8DwayGjDfzvsO" role="button" target="_blank" className="btn btn-warning" style={{ backgroundColor: '#F87431' }}>Download Resume</a>
            </section>
        </div>
    );
};

export default Resume;