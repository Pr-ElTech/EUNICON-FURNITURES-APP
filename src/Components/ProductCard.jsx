import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActionStart,
  addToCartSuccess,
  cartActionFailure,
} from "../Store/cartSlice";
import axiosInstance from "../Pages/Config/AxiosInstance";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import "../Style/ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { isLoading } = useSelector((state) => state.cart);

  // Safely extract the token string from your state tree
  const userState = useSelector((state) => state.user);
  const token =
    userState?.token ||
    userState?.user?.token ||
    localStorage.getItem("authToken");

  const {
    _id,
    productName = "Premium Furniture",
    productImage,
    price = 0,
  } = product || {};
  const item = product || {};
  const handleAddToCart = async () => {
    if (!_id) return;

    if (!token || token === "undefined" || token === "null") {
      alert("Please log in to add items to your cart.");
      return;
    }

    dispatch(cartActionStart());

    try {
      console.log(`🚀 Dispatching Add-to-Cart for ID: ${_id}`);

      // Keep the backend notification intact
      await axiosInstance.post(
        `/add-to-cart/${_id}`,
        { Quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token.trim()}`,
          },
        },
      );

      // SUCCESS PATH: Pass the product object directly to populate our frontend state array
      dispatch(addToCartSuccess(product));
      console.log("🛒 Item saved to local frontend cart array successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error adding item to cart";

      // Pass code fallback to frontend state array so the UI continues working for testing
      dispatch(addToCartSuccess(product));
      dispatch(cartActionFailure(errorMessage));

      console.error(
        "❌ Server synchronization failed, fell back to local cart array.",
        "\nStatus Code:",
        error.response?.status,
      );
    }
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat("en-NG", { minimumFractionDigits: 0 }).format(
      num,
    );
  };

  return (
    <div className="product-card">
      <div className="card-image-wrapper">
        <img
          src={productImage}
          alt={productName}
          className="product-image"
          loading="lazy"
        />
        <button
          className={`wishlist-badge-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <CiHeart className="wishlist-icon" />
        </button>
      </div>

      <div className="card-info-content">
        <h3 className="product-title-text">{productName}</h3>
        <div className="card-meta-action-row">
          <div className="price-stack-block">
            <span className="active-current-price">
              ₦{formatCurrency(price)}
            </span>
          </div>

          <div className="interactive-actions-wrapper">
            <button
              className="icon-cart-trigger"
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              <BsCart2 className="cart-action-icon" />
            </button>
            <button
              className="solid-buy-now-btn"
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
