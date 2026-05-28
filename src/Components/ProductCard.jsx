import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import BlogBtn from "./BlogBtn";
import "../Style/ProductCard.css";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Exact mapping to your database schema keys
  const productId = product?._id;
  const productName = product?.productName || "Eunicon Furniture Piece";
  const productImage =
    product?.productImage ||
    "https://via.placeholder.com/300x300?text=No+Image+Available";
  const productPrice = product?.price || 0;

  const handleBuyNow = () => {
    alert(`Proceeding to buy: ${productName}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={productImage} alt={productName} className="product-image" />

        <button
          type="button"
          className="wishlist-btn"
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Wishlist"
        >
          {isWishlisted ? (
            <FaHeart className="heart-icon active" style={{ color: "red" }} />
          ) : (
            <CiHeart className="heart-icon" />
          )}
        </button>
      </div>

      <div className="product-info-container">
        <div className="info-column-left">
          <h3 className="product-title">{productName}</h3>

          <div className="price-cart-row">
            <span className="current-price">
              /* Properly formats 3000000 into ₦3,000,000 */ ₦
              {Number(productPrice).toLocaleString()}
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
