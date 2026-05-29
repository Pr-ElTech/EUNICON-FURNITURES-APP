import React from "react";
import "../Style/EuniconProductCard.css";

const EuniconProductCard = ({ product }) => {
  if (!product) return null;

  const name = product.productName || "Eunicon Design Piece";
  const image =
    product.productImage ||
    "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=500";
  const currentPrice = product.price || 0;

  const formatCurrency = (amount) => {
    return `₦${Number(amount).toLocaleString()}`;
  };

  return (
    <div className="eunicon-card">
      <div className="eunicon-card-image-wrapper">
        <img src={image} alt={name} loading="lazy" />
      </div>

      <div className="eunicon-card-details">
        <h3 className="eunicon-card-title">{name}</h3>

        <div className="eunicon-card-footer">
          <div className="eunicon-card-price-container">
            <span className="eunicon-card-price-current">
              {formatCurrency(currentPrice)}
            </span>
          </div>

          <button
            className="eunicon-card-buy-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              console.log(`Product added to cart: ${product._id}`);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EuniconProductCard;
