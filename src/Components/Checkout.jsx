import React from "react";
import "../Style/Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <Header />
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-grid">
        {/* Left Column: Form Section */}
        <form className="checkout-form">
          <input type="text" placeholder="Full Name" className="full-width" />

          <div className="row-split">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            className="full-width"
          />
          <input type="email" placeholder="Email" className="full-width" />
          <input type="text" placeholder="Address" className="full-width" />
          <input type="text" placeholder="Country" className="full-width" />
          <input type="text" placeholder="Postal Code" className="full-width" />
          <input
            type="text"
            placeholder="Shipping Method"
            className="full-width"
          />

          <div className="payment-methods">
            <label>Payment method</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Bank
              </label>
              <label>
                <input type="checkbox" /> Card
              </label>
              <label>
                <input type="checkbox" /> Transfer
              </label>
              <label>
                <input type="checkbox" /> Kora
              </label>
              <label>
                <input type="checkbox" /> Others
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Complete Order
          </button>
        </form>

        {/* Right Column: Order Summary */}
        <aside className="order-summary">
          <div className="cart-item">
            <img src="/sofa-placeholder.jpg" alt="Product" />
            <div className="item-details">
              <p>Bronze Sofa Set</p>
              <span>₦3,000,000</span>
            </div>
          </div>

          <div className="discount-section">
            <input type="text" placeholder="Discount Code" />
            <button className="apply-btn">Apply</button>
          </div>

          <div className="totals">
            <p>
              Subtotal <span>₦3,000,000</span>
            </p>
            <p>
              Shipping <span>₦10,000</span>
            </p>
            <hr />
            <p className="grand-total">
              Total <span>NGN ₦3,010,000</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
