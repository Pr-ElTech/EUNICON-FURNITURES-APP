import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import BlogBtn from "./BlogBtn";
import "../Style/ProductCard.css";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleBuyNow = () => {
    alert(`Proceeding to buy: ${product?.productName}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product?.productImage}
          alt={product?.productName}
          className="product-image"
        />

        <button
          className="wishlist-btn"
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Wishlist"
        >
          {isWishlisted ? (
            <FaHeart className="heart-icon active" />
          ) : (
            <CiHeart className="heart-icon" />
          )}
        </button>
      </div>

      <div className="product-info-container">
        <div className="info-column-left">
          <h3 className="product-title">
            {product?.productName || "Product Title"}
          </h3>

          <div className="price-cart-row">
            <span className="current-price">
              ₦{product?.price?.toLocaleString() || "0"}
            </span>
            <BlogBtn className="cart-icon-btn" aria-label="Add to cart">
              <BsCart2 />
            </BlogBtn>
          </div>
        </div>

        <div className="info-column-right">
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
