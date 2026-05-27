import React from "react";
import "../css/CartPage.css"; // Connecting to your standalone styling sheet

const CartItemCard = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-item-row">
      
      {/* Column 1: Product Image, Name, and Remove Button (50% Width) */}
      <div className="cart-column-product">
        <div className="product-image-container">
          <img src={item?.image} alt={item?.name} />
        </div>
        <div className="product-text-details">
          <h3>{item?.name}</h3>
          <button onClick={() => onRemove(item?.id)} className="remove-item-btn">
            Remove
          </button>
        </div>
      </div>

      {/* Column 2: Single Unit Price (16.66% Width) */}
      <div className="cart-column-price">
        ₦{item?.price?.toLocaleString()}
      </div>

      {/* Column 3: Quantity Counter Box (16.66% Width) */}
      <div className="cart-column-quantity">
        <div className="quantity-counter-box">
          <button onClick={() => onQuantityChange(item?.id, item?.quantity - 1)}>-</button>
          <div className="quantity-number-display">{item?.quantity}</div>
          <button onClick={() => onQuantityChange(item?.id, item?.quantity + 1)}>+</button>
        </div>
      </div>

      {/* Column 4: Total Price for this item (16.66% Width) */}
      <div className="cart-column-total">
        ₦{(item?.price * item?.quantity)?.toLocaleString()}
      </div>

    </div>
  );
};

export default CartItemCard;