import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import ProductChairHero from "../Assets/ProductChairHero.jpg";
import { IoIosArrowDropleft } from "react-icons/io";
import "../Style/CategoryPage.css";
import HeroHeader from "../Components/HeroHeader";
import Herofooter from "../Components/HeroFooter";
import axiosInstance from "./Config/AxiosInstance";

const CollectionPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCollectionProducts = async () => {
      setIsLoading(true);

      // DIAGNOSTIC LOG 1: Check what param is being read from the URL bar
      console.log("🚀 1. Route Parameter [categoryId] extracted:", categoryId);

      try {
        // Retrieve token directly from storage to authenticate the request manually
        const token = localStorage.getItem("authToken");

        // FIX: Removed the duplicate "/api/v1" prefix.
        // Explicitly attached headers to guarantee authentication.
        const response = await axiosInstance.get(`/product/${categoryId}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        // DIAGNOSTIC LOG 2: Inspect exactly what your backend responded with
        console.log("✅ 2. Full API Server Response Object:", response);
        console.log("📦 3. Data inside response.data:", response.data);

        // Map the payload matching the singular "product" array wrapper key
        const collectionItems =
          response.data?.product ||
          response.data?.products ||
          response.data?.data ||
          [];

        console.log(
          "📊 4. Extracted Items Array for State Allocation:",
          collectionItems,
        );
        setProducts(collectionItems);
      } catch (error) {
        // DIAGNOSTIC LOG 3: Catch and read exact network failure states
        console.error(
          `❌ 5. Network Request Failed for [${categoryId}]:`,
          error,
        );
        console.error("⚠️ Error Response Details from Server:", error.response);

        setProducts([]);

        if (error.response?.status === 404) {
          console.warn(
            "⚠️ Route not found on server. Check base URL or endpoint structure.",
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      fetchCollectionProducts();
    }
  }, [categoryId, navigate]);

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
          <p className="no-items">Loading exclusive pieces...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))
        ) : (
          <p className="no-items">
            No products found in the "{categoryId}" collection!
          </p>
        )}
      </div>

      <Herofooter />
    </div>
  );
};

export default CollectionPage;
