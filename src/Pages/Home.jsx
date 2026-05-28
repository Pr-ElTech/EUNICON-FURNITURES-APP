import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import HeroHeader from "../Components/HeroHeader";
import Herofooter from "../Components/HeroFooter";
import ProductCard from "../Components/ProductCard";
import axiosInstance from "./Config/AxiosInstance"; // Only import default instance
import MainHeroBedImg from "../Assets/ProductChairHero.jpg";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // Fetching directly within the component layout
        const response = await axiosInstance.get("/allProduct");

        // Extracting data matching backend response signature safely
        const productsData =
          response.data.products || response.data.data || response.data || [];
        setAllProducts(productsData);
      } catch (error) {
        console.error("❌ Error fetching products directly in Home:", error);
        setAllProducts([]);
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
        <img src={MainHeroBedImg} alt="Banner" className="home-hero-image" />
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
          ) : allProducts.length > 0 ? (
            allProducts
              .slice(0, 8)
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

      {/* Services and Testimonial blocks remain as they are below */}
      <Herofooter />
    </div>
  );
};

export default Home;
