import React, { useState } from "react";
import "../css/CartPage.css";
import CartItemCard from "../Components/CartItemCard";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";

const CartPage = () => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      name: "Office Table",
      price: 180000,
      quantity: 1,
      image: "https://placehold.co/120x120",
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

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartData.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );
    setCartData(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
  };

  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section className="Cart-Page-Container">
      {/* Renders full-width at the very top */}
      <HeroHeader />

      {/* Structured core content wrapper clears the fixed navigation space */}
      <div className="Cart-Main-Content">
        {/* Page Titles */}
        <div className="Cart-Title-Section">
          <h1>Your Cart</h1>
          <p className="Continue-Shopping-Link">Continue Shopping</p>
        </div>

        {cartData.length === 0 ? (
          <div className="Empty-Cart-Message">
            Your cart is currently empty.
          </div>
        ) : (
          <section className="Cart-Table-Section">
            {/* Headers Layout */}
            <div className="Cart-Table-Header">
              <div className="cart-col-product">Product</div>
              <div className="cart-col-price">Price</div>
              <div className="cart-col-quantity">Quantity</div>
              <div className="cart-col-total">Total</div>
            </div>

            {/* List Array Map */}
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

            {/* Bottom Calculation Box */}
            <div className="Cart-Summary-Box">
              <div className="Subtotal-Row">
                <span className="Subtotal-Label">Subtotal</span>
                <span className="Subtotal-Price">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
              <button className="Checkout-Action-Btn">Checkout</button>
            </div>
          </section>
        )}
      </div>

      {/* Renders cleanly across the bottom viewport line */}
      <HeroFooter />
    </section>
  );
};

export default CartPage;
