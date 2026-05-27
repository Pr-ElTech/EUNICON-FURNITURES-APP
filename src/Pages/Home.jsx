import React from "react";
import "../Style/Home.css"; // Ensure this stylesheet handles your home classes
import HeroHeader from "../Components/HeroHeader";
import Herofooter from "../Components/HeroFooter";
import ProductCard from "../Components/ProductCard";

// Asset Imports (Make sure these match your project directory paths)
import MainHeroBedImg from "../Assets/ProductChairHero.jpg"; // Your top hero slide asset
import { headerMiddle } from "../JS/Header"; // Or wherever your static home inventory data lives

const Home = () => {
  // Pull your standard display items list directly from your JS data config structure
  // For example, combining items or targeting a master product array
  const allProducts =
    headerMiddle?.flatMap(
      (section) =>
        section.categories?.slice(0, 10).flatMap((cat) => cat.items || []) ||
        [],
    ) || [];

  return (
    <div className="home-page-container">
      {/* 1. Global Navigation Bar Header */}
      <HeroHeader />

      {/* 2. Full Width Hero Spotlight Banner */}
      <div className="home-hero-section">
        <img
          src={MainHeroBedImg}
          alt="Elevate Your Space Banner"
          className="home-hero-image"
        />
        <div className="home-hero-overlay">
          <h1>
            Elevate Your Space With
            <br />
            Timeless Furniture
          </h1>
          <button className="home-hero-btn" type="button">
            Buy Now
          </button>
        </div>
      </div>

      {/* 3. Main Product Inventory Display Section */}
      <main className="home-products-section">
        <div className="home-section-heading">
          <h2>Explore Our Collections</h2>
        </div>

        <div className="products-grid-layout">
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-items">Fresh design pieces arriving soon!</p>
          )}
        </div>
      </main>

      {/* 4. Service Highlight Row (Our Artisans Services) */}
      <section className="artisans-services-section">
        <div className="home-section-heading">
          <h2>Our Artisans Services</h2>
        </div>
        <div className="services-cards-wrapper">
          <div className="service-profile-card">
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=120&h=120"
              alt="Painter"
            />
            <h4>Painter</h4>
            <h3>Uban Joseph</h3>
            <p className="rating-stars">★★★★★</p>
            <button className="view-profile-btn">View</button>
          </div>
          <div className="service-profile-card">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=120&h=120"
              alt="Plumber"
            />
            <h4>Plumber</h4>
            <h3>Alex Emmanuel</h3>
            <p className="rating-stars">★★★★★</p>
            <button className="view-profile-btn">View</button>
          </div>
          <div className="service-profile-card">
            <img
              src="https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=120&h=120"
              alt="Carpenter"
            />
            <h4>Carpenter</h4>
            <h3>Uman John</h3>
            <p className="rating-stars">★★★★★</p>
            <button className="view-profile-btn">View</button>
          </div>
        </div>
      </section>

      {/* 5. User Testimonial Section (What Our Customers Say) */}
      <section className="testimonials-section">
        <div className="home-section-heading">
          <h2>What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-bubble">
            <p>
              "Buying with Eunicon was one of the best decisions we made. Their
              attention to detail and professionalism stood out from day one."
            </p>
            <div className="testimonial-user">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&h=40"
                alt="User"
              />
              <span>Samson Divine</span>
            </div>
            <p className="rating-stars-small">★★★★★</p>
          </div>
          <div className="testimonial-bubble">
            <p>
              "Eunicon completely transformed my living space. The quality is
              top notch and the design is exactly what I wanted!"
            </p>
            <div className="testimonial-user">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=40&h=40"
                alt="User"
              />
              <span>Olabisi Joy</span>
            </div>
            <p className="rating-stars-small">★★★★★</p>
          </div>
          <div className="testimonial-bubble">
            <p>
              "I struggled to find furniture that matched my style until I found
              Eunicon. Now my home looks elegant and unique!"
            </p>
            <div className="testimonial-user">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=40&h=40"
                alt="User"
              />
              <span>Lisa Esther</span>
            </div>
            <p className="rating-stars-small">★★★★★</p>
          </div>
        </div>
      </section>

      {/* 6. Standard Footer Block */}
      <Herofooter />
    </div>
  );
};

export default Home;
