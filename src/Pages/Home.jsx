import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import HeroHeader from "../Components/HeroHeader";
import Herofooter from "../Components/HeroFooter";
import ProductCard from "../Components/ProductCard";

// 1. Import your default core axios instance directly
import axiosInstance from "./Config/AxiosInstance";

// 2. Fixed the asset import syntax (uncommented and removed the stray "=" sign)
import MainHeroBedImg from "../Assets/ProductChairHero.jpg";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fetch products inline directly from the endpoint
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // Consuming the get all products endpoint directly
        const response = await axiosInstance.get("/allProduct");

        // Extract the data array gracefully based on your backend response shape
        const productsData =
          response.data.products || response.data.data || response.data || [];
        setAllProducts(productsData);
      } catch (error) {
        console.error(
          "❌ Error fetching products directly on Home Page:",
          error,
        );
        setAllProducts([]); // Fallback to an empty array to prevent mapping crashes
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-page-container">
      <HeroHeader />
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

      <main className="home-products-section">
        <div className="home-section-heading">
          <h2>Explore Our Collections</h2>
        </div>

        <div className="products-grid-layout">
          {isLoading ? (
            <p className="no-items">Loading products...</p>
          ) : allProducts && allProducts.length > 0 ? (
            allProducts
              .slice(0, 8) // Limits view to the top 8 items on the landing page
              .map((product) => (
                <ProductCard
                  key={product._id || product.id}
                  product={product}
                />
              ))
          ) : (
            <p className="no-items">Fresh design pieces arriving soon!</p>
          )}
        </div>
      </main>

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

      <Herofooter />
    </div>
  );
};

export default Home;
