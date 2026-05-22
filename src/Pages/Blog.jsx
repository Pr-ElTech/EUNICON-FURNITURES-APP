import React from "react";
import "../Style/Blog.css";
import BlogHero from "../Components/BlogHero";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";

const Blog = () => {
  return (
    <section className="blog-Page">
      <HeroHeader />
      <div className="blog-Page-wrapper">
        <article className="blog-Page-mainPage">
          <BlogHero />
        </article>
        <HeroFooter />
      </div>
    </section>
  );
};
export default Blog;
