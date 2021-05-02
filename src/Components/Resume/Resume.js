import React from 'react';
import imagebg from '../../Images/background.png'

const Resume = () => {
    return (
        <section className="container" style={{ backgroundImage: 'imagebg' }}>
            <div className="d-flex justify-content-center text-secondary">
                <h4 className="w-50 ">I am a very curious learner and passionate designer with a focus on exploring the vast world of web application design. </h4>
            </div>
            <div className="text-center mt-2 text-secondary">
                <h4>Objective</h4>
                <p>Every site has its own story to tell. I always try to design a site that portrays an honest reflection of the brand and users can easily navigate it while using it.</p>
            </div>
            <div className="text-center mt-2 text-secondary">
                <h4>Skill</h4>
                <div className="justify-content-center">
                    <table >
                        <tr>
                            <th>Web-Design</th>
                            <th>Tools</th>
                            <th>Designing</th>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>JavaScript</td>
                            <td>Adobe photoshop</td>      
                        </tr>
                        <tr>
                            <td>BootStrap</td>
                            <td>React.js</td>
                            <td>Adobe illustrator</td>      
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>Node.js</td>
                            <td>Autodesk sketchbook</td>      
                        </tr>
                    </table>
                </div>
            </div>
            <div className="text-center mt-2 text-secondary">
                <h4 >Co-curricular Activities/Interest</h4>
                <p>Worked as student contributor in Contextbd (Aug 2015-April 2017), divisional graduate outreach coordinator at BGN (Sep 2017- Sep 2018). <br/>Hobby- reading books, watching documentaries, photography, painting.</p>
            </div>
            <div className="text-center mt-2 text-secondary">
                <h4>Education</h4>
                <p>Graduated in Bachelor of Architecture degree(5 years) from Chittagong University of Engineering and Technology in 2017</p>
            </div>
            <br />
            <a href="https://drive.google.com/uc?export=download&id=1UsXlfWoy_MkGaHur0pM8DwayGjDfzvsO" role="button" target="_blank" className="btn btn-warning" style={{ backgroundColor: '#F87431' }}>Download Resume</a>
        </section>
    );
};

export default Resume;