import React from "react";
import BlogBtn from "./BlogBtn";
import "../Style/BlogCard.css";

export const BlogCard = ({ BlogCard }) => {
  const { image, title, subtitle, context } = BlogCard;

  return (
    <div className="blog-Card-ctn">
      <img className="hero-card-img" src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <h4 className="card-author">{subtitle}</h4>
        <p className="card-description">{context}</p>
        <BlogBtn className="read-more-btn" text="See More" />
      </div>
    </div>
  );
};
