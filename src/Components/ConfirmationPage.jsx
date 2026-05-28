import React from "react";
import { useNavigate } from "react-router-dom";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";
import "../Style/PaymentSuccess.css";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page-container">
      {/* Universal Global Header */}
      <HeroHeader />

      {/* Main Success Content Card Area */}
      <main className="success-content-wrapper">
        <div className="success-card">
          {/* Animated/Styled SVG Success Ring Checkmark */}
          <div className="success-icon-circle">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="checkmark-svg"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Heading Statements matching Figma */}
          <h1>Your payment was successful!</h1>
          <p className="thank-you-text">Thank you Peculiar</p>
          <p className="confirmation-code">Confirmation #CJEMM01G0</p>

          {/* Action Trigger Link */}
          <button
            type="button"
            className="continue-shopping-btn"
            onClick={() => navigate("/home")}
          >
            Continue Shopping
          </button>
        </div>
      </main>

      {/* Universal Global Footer */}
      <HeroFooter />
    </div>
  );
};

export default ConfirmationPage;
