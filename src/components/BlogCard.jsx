import React from 'react';
import './blogCard.css'
import Button from './Button';

function BlogCard({ blog }) {
  return (
    <div className="blog col-xl-3 col-md-6 mb-4">
        <article>
            <div className="post-img">
                <img src={blog.thumbnail} alt="" className='img-fluid' />
            </div>

            <p className="post-category">{blog.category}</p>

            <h2 className="title">
                <a href="#">{blog.title}</a>
            </h2>
            <Button icon={<ion-icon name="bag-handle-outline"></ion-icon>} name='Buy' />
        </article>
    </div>
  );
}

export default BlogCard;
