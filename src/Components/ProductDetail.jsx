import React, { useState } from "react";
import HeroHeader from "./HeroHeader";
import HeroFooter from "./HeroFooter";
import BedDetailHero from "../Assets/ProductChairHero.jpg"; // Using your main bedroom banner asset
import "../Style/ProductDetail.css";

const ProductDetail = () => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const incrementQuantity = () => {
    setItemQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setItemQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    alert(`Added ${itemQuantity} item(s) to your cart!`);
  };

  return (
    <div className="product-detail-page">
      <HeroHeader />

      <main className="product-detail-container">
        <div className="product-image-frame">
          <img
            src={BedDetailHero}
            alt="Bronze Sofa Set Premium Furniture Piece"
            className="showcase-display-img"
          />
        </div>

        <div className="product-info-panel">
          <h1 className="product-main-title">Bronze Sofa Set</h1>
          <h2 className="product-price-tag">₦3,000,000</h2>

          <p className="product-description-prose">
            Elevate your living space with the timeless elegance of our Bronze
            Sofa Set—crafted for both comfort and style. Designed to bring a
            warm, luxurious feel to your home, this sofa set blends modern
            sophistication with durable craftsmanship.
          </p>

          <span className="read-more-trigger">Read more</span>

          <div className="purchase-controls-row">
            <div className="stepper-counter-box">
              <button
                type="button"
                className="stepper-btn"
                onClick={decrementQuantity}
                aria-label="Decrease item quantity"
              >
                -
              </button>
              <div className="stepper-count-value">{itemQuantity}</div>
              <button
                type="button"
                className="stepper-btn"
                onClick={incrementQuantity}
                aria-label="Increase item quantity"
              >
                +
              </button>
            </div>

            <button type="button" className="action-btn buy-now-btn">
              Buy Now
            </button>

            <button
              type="button"
              className="action-btn add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </main>

      <HeroFooter />
    </div>
  );
};

export default ProductDetail;
