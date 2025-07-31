
import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <>
      {blogs?.length ? (
        blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.title}</h3>
            <h5>{blog.author}</h5>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs found</p>
      )}
    </>
  );
};

export default BlogDetails;
