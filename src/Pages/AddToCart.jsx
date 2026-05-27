import React, { useState } from 'react';
import '../Style/AddToCart.css';
import Header from '../Components/CartHeader';
import HeroFooter from '../Components/HeroFooter';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Square Rug',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=200',
      quantity: 1
    },
    {
      id: 2,
      name: 'Office Chair',
      price: 100000,
      image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&q=80&w=200',
      quantity: 1
    }
  ]);

  const handleIncrement = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatCurrency = (num) => {
    return '₦' + num.toLocaleString();
  };

  return (
    <div className="cart-container">
        <Header />
      <div className="cart-top-bar">
        <div className="cart-title-group">
          <h1 className="cart-main-title">Your Cart</h1>
          <span className="continue-shopping">Continue Shopping</span>
        </div>
        <button className="restore-btn">Restore item</button>
      </div>

      <div className="cart-header">
        <div>Product</div>
        <div className="text-right">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Total</div>
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="product-info">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-details">
              <h3>{item.name}</h3>
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
          <div className="product-price text-right">{formatCurrency(item.price)}</div>
          <div className="quantity-selector">
            <div className="quantity-control">
              <button className="qty-btn" onClick={() => handleDecrement(item.id)}>-</button>
              <button className="qty-input">{item.quantity}</button>
              <button className="qty-btn" onClick={() => handleIncrement(item.id)}>+</button>
            </div>
          </div>
          <div className="product-total text-right">{formatCurrency(item.price * item.quantity)}</div>
        </div>
      ))}

      <div className="cart-summary">
        <div className="subtotal-container">
          <div className="subtotal-label">Subtotal</div>
          <div className="subtotal-value">{formatCurrency(subtotal)}</div>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
        <HeroFooter />
    </div>
  );
};


export default AddToCart