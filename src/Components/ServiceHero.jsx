import React from 'react';
import  "../css/serviceHero.css";

const ServiceHero = () => {
  const handleButtonClick = () => {
    // Add navigation or modal trigger logic here
    console.log('Hire An Artisan clicked');
  };

  return (
    <div className="service-hero">
      {/* Dark overlay mask layer for text readability */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Hire Skilled Artisans You Can Trust—Fast & Stress-Free
        </h1>
        <button className="hero-btn" onClick={handleButtonClick}>
          Hire An Artisan
        </button>
      </div>
    </div>
  );
};

export default ServiceHero;