import React from "react";
import "../Style/Customfurniture.css";
import HeroHeader from "./HeroHeader";
import HeroFooter from "./HeroFooter";

const CustomFurniturePage = () => {
  // Placeholder images matching the design's color palette and style
  const carouselItems = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500",
      alt: "Cream organic armchair",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=500",
      alt: "Dark grey futuristic chair",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=500",
      alt: "Classic wooden swivel chair",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500",
      alt: "Blue leaf-shaped accent chair",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=500",
      alt: "White flower petal chair",
    },
  ];

  return (
    <div className="furniture-container">
      <HeroHeader />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-content">
            <h1>
              “Built for your style. Designed for your comfort. Create your
              perfect space with Eunicon.”
            </h1>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800"
            alt="Featured Eunicon Chair with side table"
            className="hero-image"
          />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <button className="nav-btn prev-btn" aria-label="Previous">
          ‹
        </button>

        <div className="carousel-track">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-card card-pos-${index + 1}`}
            >
              <div className="card-image-wrapper">
                <img src={item.img} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next-btn" aria-label="Next">
          ›
        </button>
      </section>
      <HeroFooter />
    </div>
  );
};

export default CustomFurniturePage;
