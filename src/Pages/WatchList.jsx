import React, { useState } from "react";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";
import ProductCard from "../Components/ProductCard";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import "../Style/WatchList.css";

// Mock Data setup simulating dynamic states
const initialItems = [
  {
    id: 1,
    title: "Centre Coffee Table",
    price: "₦150,000",
    oldPrice: "₦180,000",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Stylish Sofa Set",
    price: "₦4,700,000",
    oldPrice: "₦5,000,000",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
  },
];

const WatchList = () => {
  const [wishlistItems, setWishlistItems] = useState(initialItems);

  // Remover tracking layout state handler
  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist-page-hull">
      <HeroHeader />

      {/* CONDITIONAL LAYOUT LOGIC */}
      {wishlistItems.length > 0 ? (
        /* ================= POPULATED STATE (image_ea7c54.png) ================= */
        <div className="wishlist-populated-container">
          {/* Hero Bed Image Banner */}
          <div className="wishlist-hero-banner">
            <div className="wishlist-banner-overlay">
              <button
                className="back-nav-link"
                onClick={() => window.history.back()}
              >
                <IoIosArrowDropleftCircle size={28} />
                <span>Wishlist</span>
              </button>
            </div>
          </div>

          {/* Main List Workspace Elements */}
          <main className="wishlist-content-area">
            <h2 className="wishlist-main-title">Your products wishlist</h2>
            <hr className="wishlist-divider-line" />

            {/* Grid Container */}
            <div className="wishlist-products-grid">
              {wishlistItems.map((product) => (
                <div key={product.id} className="wishlist-grid-item-cell">
                  {/* Plain text remove header anchor option link */}
                  <button
                    type="button"
                    className="remove-action-trigger"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    Remove
                  </button>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Button More Box Wrapper */}
            <div className="pagination-action-row">
              <button type="button" className="button-more-outline">
                Button more
              </button>
            </div>
          </main>
        </div>
      ) : (
        /* ================= EMPTY STATE (image_e93ff6.png) ================= */
        <div className="wishlist-empty-container">
          <div className="empty-state-card-view">
            <div className="empty-heart-icon-wrapper">
              <FiHeart size={80} strokeWidth={1.2} color="#94a3b8" />
            </div>
            <h2 className="empty-state-headline">
              Your Wishlist is Currently empty.
            </h2>
            <p className="empty-state-subtext">
              Proceed to add any product to the wishlist item. You will find out
              of interesting products on our "Shop" page.
            </p>
            <button
              type="button"
              className="return-shop-btn"
              onClick={() => (window.location.href = "/shop")}
            >
              RETURN TO SHOP
            </button>
          </div>
        </div>
      )}

      <HeroFooter />
    </div>
  );
};

export default WatchList;
