import React from 'react';
import bImage from '../../Images/blogImg.png'
import BlogDetail from '../BlogDetail/BlogDetail';

const Blogs = () => {

    const allBlogs = [{
        id:121,
        title: 'Title A',
        image: bImage,
        description:'A blog (a shortened version of “weblog”) is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first, at the top.'    
    },{
        id:122,
        title: 'Title B',
        image: bImage,
        description:'A blog (a shortened version of “weblog”) is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first, at the top.' 
    },{
        id:123,
        title: 'Title C',
        image: bImage,
        description:'A blog (a shortened version of “weblog”) is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first, at the top.' 
    }]
    return (
        <section className="container">
            <div className="text-center mt-2">                
                <h3>My Blogs</h3>
            </div>
            <div className="justify-content-center mt-5">
                <div className="w-90 row mt-3 pt-3">
                    {
                        allBlogs.map(blog => <BlogDetail blog={blog} key={blog.id}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;