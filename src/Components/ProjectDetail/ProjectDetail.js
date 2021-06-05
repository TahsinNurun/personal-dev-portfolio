import React from 'react';


const ProjectDetail = ({ project }) => {
    return (
        <div className="card mb-3 container w-25 mt-3 shadow-lg" style={{backgroundColor: 'silver',height:"30rem",width: '21rem'}}>
            <img className="card-img-top mx-auto  mt-3 p-1" style={{borderRadius:'5px'}} src={project.image} alt="Card image cap"
            />
            <div className="card-body container">
                <h5 className="card-title">{project.title}</h5>
                <a href={project.site} className="badge badge-warning" style={{ backgroundColor: '#F87431' }}><h5 className="card-text">Live site</h5></a>
                <br/>
                <a href={project.code} className="badge badge-warning my-2" style={{backgroundColor: '#F87431'}}><h6 className="card-text text-white " >See Code</h6></a>
            </div>
        </div>
    );
};

export default ProjectDetail;