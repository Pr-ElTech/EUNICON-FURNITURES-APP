import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Store/cartSlice";
import "../css/CartPage.css";
import CartItemCard from "../Components/CartItemCard";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
  };

  const handleRemove = (id) => {};

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0,
  );

  return (
    <section className="Cart-Page-Container">
      <HeroHeader />

      <div className="Cart-Main-Content">
        <div className="Cart-Title-Section">
          <h1>Your Cart</h1>
          <p className="Continue-Shopping-Link">Continue Shopping</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="Empty-Cart-Message">
            Your cart is currently empty.
          </div>
        ) : (
          <section className="Cart-Table-Section">
            <div className="Cart-Table-Header">
              <div className="cart-col-product">Product</div>
              <div className="cart-col-price">Price</div>
              <div className="cart-col-quantity">Quantity</div>
              <div className="cart-col-total">Total</div>
            </div>

            <article className="Cart-Table-Body">
              {cartItems.map((furnitureItem) => (
                <CartItemCard
                  key={furnitureItem._id || furnitureItem.id}
                  item={furnitureItem}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </article>

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

      <HeroFooter />
    </section>
  );
};

export default CartPage;
