import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import ProductChairHero from "../Assets/ProductChairHero.jpg";
import { IoIosArrowDropleft } from "react-icons/io";
import "../Style/CategoryPage.css";
import HeroHeader from "../Components/HeroHeader";
import Herofooter from "../Components/HeroFooter";
import axiosInstance from "./Config/AxiosInstance"; // Import the core default instance

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products by collection when component loads
  useEffect(() => {
    const fetchCollectionProducts = async () => {
      setIsLoading(true);
      try {
        // 1. Fetch all products directly inside the component
        const response = await axiosInstance.get("/allProduct");

        // 2. Extract the data array safely
        const allItems =
          response.data.products || response.data.data || response.data || [];

        // 3. Filter items to match the current categoryId from the URL params
        const filteredProducts = allItems.filter(
          (product) =>
            product.category?.toLowerCase().trim() ===
            categoryId?.toLowerCase().trim(),
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("❌ Error fetching collection products inline:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      fetchCollectionProducts();
    }
  }, [categoryId]);

  return (
    <div className="category-page">
      <HeroHeader />

      <div className="category-hero">
        <img
          src={ProductChairHero}
          alt="Category Banner"
          className="hero-image"
        />
        <div className="hero-text-container">
          <IoIosArrowDropleft
            className="back-arrow"
            onClick={() => navigate(-1)}
          />
          <h1>
            {categoryId
              ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
              : "Collection"}{" "}
            Collections
          </h1>
        </div>
      </div>

      <div className="heading-container">
        <h2>Explore Our Collections</h2>
      </div>

      <div className="products-flex-wrapper">
        {isLoading ? (
          <p className="no-items">Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))
        ) : (
          <p className="no-items">No products found in this collection!</p>
        )}
      </div>

      <Herofooter />
    </div>
  );
};

export default CategoryPage;
