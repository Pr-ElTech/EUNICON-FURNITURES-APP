import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import BlogBtn from "./BlogBtn"; // Importing your custom button component
import "../Style/ProductCard.css"; // Native CSS import

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleBuyNow = () => {
    alert(`Proceeding to buy: ${product.title}`);
  };

  return (
    <div className="product-card">
      {/* Image Wrap Container */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {/* Wishlist Heart Button */}
        <button
          className="wishlist-btn"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          {isWishlisted ? (
            <FaHeart className="heart-icon active" />
          ) : (
            <CiHeart className="heart-icon" />
          )}
        </button>
      </div>

      <h3 className="product-title">{product.title}</h3>

      <div className="product-details-row">
        <div className="price-box">
          <span className="old-price">₦300,000</span>
          <span className="current-price">{product.price}</span>
        </div>

        <div className="action-box">
          <button className="cart-icon-btn">
            <BsCart2 />
          </button>

          <BlogBtn
            className="buy-now-btn"
            text="Buy Now"
            onClick={handleBuyNow}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
