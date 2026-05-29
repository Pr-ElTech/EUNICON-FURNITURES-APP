import React, { useState } from "react";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";
import "../Style/ArtisanProfile.css";

const ArtisanProfile = () => {
  const [activeTab, setActiveTab] = useState("about");

  const artisanData = {
    name: "Umeh John",
    profession: "Furniture",
    ratings: "5.0 (1.3k reviews)",
    experience: "5 years +",
    location: "Lagos Nigeria",
    imageUrl: "https://via.placeholder.com/150",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="tab-pane about-pane">
            <p>
              Umeh John is a talented and detail-oriented furniture specialist
              based in Lagos, with over 5 years of experience in designing and
              crafting high-quality furniture pieces...
            </p>
            <form className="artisan-contact-form">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Request</button>
            </form>
          </div>
        );
      case "service":
        return (
          <div className="tab-pane service-pane">
            <h3>Explore His Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <h4>Sofa Set</h4>
                <button>Buy Now</button>
              </div>
              <div className="service-card">
                <h4>Coffee Table</h4>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        );
      case "portfolio":
        return (
          <div className="tab-pane portfolio-pane">
            <div className="portfolio-showcase">
              <div className="before-after-container">
                <div className="side-before">Before</div>
                <div className="side-after">After</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="artisan-profile-layout">
      <HeroHeader />

      <main className="artisan-main-wrapper">
        <section className="artisan-hero-card">
          <div className="hero-left-img">
            <img src={artisanData.imageUrl} alt={artisanData.name} />
          </div>
          <div className="hero-right-details">
            <h2>Name: {artisanData.name}</h2>
            <p>Profession: {artisanData.profession}</p>
            <p>Ratings: {artisanData.ratings}</p>
            <p>Experience: {artisanData.experience}</p>
            <p>Location: {artisanData.location}</p>
            <div className="hero-action-buttons">
              <button className="btn-hire">Hire Now</button>
              <button className="btn-msg">Message</button>
            </div>
          </div>
        </section>

        <nav className="tab-navigation-bar">
          <button
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`tab-btn ${activeTab === "service" ? "active" : ""}`}
            onClick={() => setActiveTab("service")}
          >
            Service
          </button>
          <button
            className={`tab-btn ${activeTab === "portfolio" ? "active" : ""}`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
        </nav>

        <section className="dynamic-body-content">{renderTabContent()}</section>
      </main>

      <HeroFooter />
    </div>
  );
};

export default ArtisanProfile;
