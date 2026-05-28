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

  useEffect(() => {
    const fetchCollectionProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/allProduct");
        const allItems =
          response.data.products || response.data.data || response.data || [];

        // Defensively checks both 'collections' and 'collection' keys from your schema
        const filteredProducts = allItems.filter((product) => {
          const itemCategory = product.collections || product.collection;
          return (
            itemCategory?.toLowerCase().trim() ===
            categoryId?.toLowerCase().trim()
          );
        });

        setProducts(filteredProducts);
      } catch (error) {
        console.error("❌ Error filtering collection products:", error);
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
