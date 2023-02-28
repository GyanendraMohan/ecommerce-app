import React from "react";
import { Link } from "react-router-dom";

const BlogCart = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 March, 2023</p>
          <h5 className="title">A beautifull sunday morning renaissance</h5>
          <p className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
