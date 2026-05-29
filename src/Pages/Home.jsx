import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import HeroHeader from "../Components/HeroHeader";
import Herofooter from "../Components/HeroFooter";
import EuniconProductCard from "../Components/EuniconProductCard";
import axiosInstance from "./Config/AxiosInstance";
import MainHeroBedImg from "../Assets/ProductChairHero.jpg";
import Artisans from "../Components/Artisans";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Initialize the navigation hook
  const navigate = useNavigate();

  // 2. Correctly extract your logged-in user state from Redux slice store
  // (Adjust state.auth.user depending on how you named your auth slice reducer)
  const user = useSelector((state) => state.auth?.user);

  // 3. Keep the useEffect block completely separate and dedicated to data fetching
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const response = await axiosInstance.get("/allProduct");

        // 💡 Read the proper payload array using fallback chaining
        const productsData =
          response.data.users ||
          response.data.products ||
          response.data.data ||
          [];

        setAllProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        console.error(
          "❌ Error fetching products directly on Home Page:",
          error,
        );
        setAllProducts([]);
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
          {/* 4. Fixed the onClick handler to route somewhere valid */}
          <button
            className="home-hero-btn"
            type="button"
            onClick={() => navigate("/shop")}
          >
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
              .slice(0, 8)
              .map((product) => (
                <EuniconProductCard key={product._id} product={product} />
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
        <Artisans />
      </section>

      <Herofooter />
    </div>
  );
};

export default Home;
