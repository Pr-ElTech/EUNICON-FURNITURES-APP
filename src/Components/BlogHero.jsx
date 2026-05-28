import React from "react";
import { BlogCard } from "./BlogCard";
import { Card } from "../JS/Card1";
import herobed from "../Assets/heroBed.jpg";
import "../Style/BlogHero.css";

const BlogHero = () => {
  return (
    <section className="Blog-Hero-Page">
      {/* Banner Section with absolute text overlay */}
      <div className="Blog-Hero-image-container">
        <img src={herobed} alt="Hero Banner Bed" className="Blog-Hero-img" />
        <div className="Blog-Hero-overlay">
          <button className="Blog-back-btn" aria-label="Go back">
            ‹
          </button>
          <h1 className="Blog-overlay-title">Blog</h1>
        </div>
      </div>

      {/* Grid Container holding the 3 columns of cards */}
      <div className="Blog-Grid-wrapper">
        <article className="Blog-Hero-article">
          {Card.map((card) => (
            <BlogCard key={card.id} BlogCard={card} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default BlogHero;
