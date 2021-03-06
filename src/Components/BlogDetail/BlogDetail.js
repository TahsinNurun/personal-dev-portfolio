import React from 'react';

const BlogDetail = ({ blog }) => {
    return (

            <div className="card mb-3 container w-25 mt-3 shadow-lg" style={{ height: '35rem', width: '21rem'}}>
                <img className="card-img-top mx-auto d-block mt-3 p-1" src={blog.image} alt="Card image cap" style={{width: '30vh', height: '15vh'}} />
                <div className="card-body text-center">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

    );
};

export default BlogDetail;