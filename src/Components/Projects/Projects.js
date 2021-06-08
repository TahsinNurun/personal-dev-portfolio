import React from 'react';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import image1 from '../../Images/01.png';
import image2 from '../../Images/02.png';
import image3 from '../../Images/03.png';
import image4 from '../../Images/04.png';
import image5 from '../../Images/05.png';
import './Projects.css';



const Projects = () => {

    const allProjects = [{
        id:12,
        title: 'Mass-Design',
        image: image1,
        code:'https://github.com/TahsinNurun/Mass-Design-client',
        site:'https://mass-design-client.web.app/'
    },{
        id:13,
        title: 'Natural-Mart',
        image: image2,
        code:'https://github.com/TahsinNurun/Natural-Mart-Client',
        site:'https://nature-mart-33fc5.web.app/home'
    },{
        id:14,
        title: 'Game-Obsession',
        image: image3,
        code:'https://github.com/TahsinNurun/Game-Obsession',
        site:'https://604b28efdeaabc89d188b37e--agitated-joliot-227476.netlify.app/'
    },{
        id:15,
        title: 'Tasete-of-Bangladesh',
        image: image4,
        code:'https://github.com/pHeroTeam/final-scic-assignment',
        site:'https://604b28efdeaabc89d188b37e--agitated-joliot-227476.netlify.app/'
    },{
        id:15,
        title: 'Creative-Cafe',
        image: image5,
        code:'https://github.com/TahsinNurun/creative-cafe-202',
        site:'https://drive.google.com/file/d/1j5KzocqHMUsFsORTKY7RhuhRmSAE-aDS/view'
    }]

    return (
        <section className="container" >
            <div className="text-center mt-2">                
                <h3>Visit Some Of My Recent Works</h3>
            </div>
            <div className="justify-content-center mt-5">
                <div className="w-90 row mt-3 pt-3">
                    {
                        allProjects.map(project => <ProjectDetail project={project} key={project.id}></ProjectDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;