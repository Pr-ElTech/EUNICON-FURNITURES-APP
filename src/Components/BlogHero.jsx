import React from "react";
import { BlogCard } from "./BlogCard";
import "../Style/BlogHero.css";
import { Card } from "../JS/Card1";
import herobed from "../Assets/heroBed.jpg";

const BlogHero = () => {
  return (
    <section className="Blog-Hero-Page">
      <div className="Blog-Hero-image">
        <img src={herobed} alt="Hero Image" />
      </div>

      <article className="Blog-Hero-article">
        {Card.map((card) => (
          <BlogCard key={card.id} BlogCard={card} />
        ))}
      </article>
    </section>
  );
};

export default BlogHero;
