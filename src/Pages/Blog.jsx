import React from "react";
import "../Style/Blog.css";
import BlogHero from "../Components/BlogHero";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";

const Blog = () => {
  return (
    <section className="blog-Page">
      <HeroHeader />
      <main className="blog-Page-mainPage">
        <BlogHero />
      </main>
      <HeroFooter />
    </section>
  );
};

export default Blog;
