import React from 'react'

const OrderSummary = () => {
  return (
     <div className="order_summary">
      <div className="product">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400"
          alt=""
        />

        <div className="product_info">
          <h4>Bronze Sofa Set</h4>
        </div>

        <span className="price">₦2,600,000</span>
      </div>

      <div className="discount">
        <input type="text" placeholder="Discount Code" />
        <button>Apply</button>
      </div>

      <div className="summary">
        <div>
          <span>Subtotal</span>
          <span>₦2,600,000</span>
        </div>

        <div>
          <span>Shipping</span>
          <span>₦410,000</span>
        </div>

        <div className="total">
          <span>Total</span>
          <span>₦3,010,000</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
