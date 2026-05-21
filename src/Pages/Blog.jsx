import React from "react";
import "../Style/Blog.css";
import BlogHero from "../Components/BlogHero";
import HeroHeader from "../Components/HeroHeader";

const Blog = () => {
  return (
    <section className="blog-Page">
      <HeroHeader />
      <div className="blog-Page-wrapper">
        <article className="blog-Page-mainPage">
          <BlogHero />
        </article>
        <article className="blog-Page-footer">{/* Footer content */}</article>
      </div>
    </section>
  );
};
export default Blog;
