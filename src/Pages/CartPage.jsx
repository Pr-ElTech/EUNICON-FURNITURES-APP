import React, { useState } from "react";
import CartItem from "../Components/CartItemCard";
import "../css/CartPage.css"
import CartItemCard from "../Components/CartItemCard";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";

const CartPage = () => {
  // Hardcoded sample array of data to mimic what your cart state will receive
  const [cartData, setCartData] = useState([
    {
      id: 1,
      name: "Office Table",
      price: 180000,
      quantity: 1,
      image: "https://placehold.co/120x120", // Temporarily using placeholder images
    },
    {
      id: 2,
      name: "Square Rug",
      price: 120000,
      quantity: 1,
      image: "https://placehold.co/120x120",
    },
    {
      id: 3,
      name: "Office Chair",
      price: 100000,
      quantity: 1,
      image: "https://placehold.co/120x120",
    },
  ]);

  // Function to increase or decrease item quantities
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Stop quantity from dropping below 1
    
    const updatedCart = cartData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartData(updatedCart);
  };

  // Function to remove an item entirely from the cart list
  const handleRemove = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
  };

  // Basic math statement to add all item totals together
  const subtotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="Cart-Page-Container">
        <HeroHeader/>
      {/* Page Titles */}
      <div className="Cart-Title-Section">
        <h1>Your Cart</h1>
        <p className="Continue-Shopping-Link">Continue Shopping</p>
      </div>

      {cartData.length === 0 ? (
        <div className="Empty-Cart-Message">Your cart is currently empty.</div>
      ) : (
        <section className="Cart-Table-Section">
          
          {/* Main Table Headers mapped out with simple structural divs */}
          <div className="Cart-Table-Header">
            <div className="cart-col-product">Product</div>
            <div className="cart-col-price">Price</div>
            <div className="cart-col-quantity">Quantity</div>
            <div className="cart-col-total">Total</div>
          </div>

          {/* Dynamic Article Array mapping out our reusable CartItems */}
          <article className="Cart-Table-Body">
            {cartData.map((furnitureItem) => (
              <CartItemCard
                key={furnitureItem.id}
                item={furnitureItem}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </article>

          {/* Bottom Summary Section */}
          <div className="Cart-Summary-Box">
            <div className="Subtotal-Row">
              <span className="Subtotal-Label">Subtotal</span>
              <span className="Subtotal-Price">₦{subtotal.toLocaleString()}</span>
            </div>
            <button className="Checkout-Action-Btn">Checkout</button>
          </div>

        </section>
      )}

      <HeroFooter/>
    </section>
  );
};

export default CartPage;