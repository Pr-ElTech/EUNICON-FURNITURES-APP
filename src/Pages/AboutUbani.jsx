import React, { useState } from "react";
import "../Style/Service.css";
import Header from "../Components/HeroHeader";
import Cards from "../Components/ServiceCard";
import samuel from "../assets/directorsportrait/samuel (2).png";
import HeroFooter from "../Components/HeroFooter";

const AboutUbani = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="service_page_wrapper">
      <Header />

      {/* Artisan Identity Showcase Area */}
      <main className="artisan-showcase-container">
        <div className="inner_service_page">
          <Cards
            img={samuel}
            name="Umeh John"
            profession="Furniture"
            rating={5.0}
            experience={5}
            location="Lagos Nigeria"
            showBtn={true}
          />
        </div>
      </main>

      {/* Segmented Navigation Tab Bar */}
      <div className="tab-navigation-bar-container">
        <div className="tab-navigation-inner">
          <button
            type="button"
            className={`nav-tab-item ${activeTab === "About" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </button>
          <button
            type="button"
            className={`nav-tab-item ${activeTab === "Service" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("Service")}
          >
            Service
          </button>
          <button
            type="button"
            className={`nav-tab-item ${activeTab === "Portfolio" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("Portfolio")}
          >
            Portfolio
          </button>
        </div>
      </div>

      {/* Detailed Description Block */}
      <article className="biography-text-section">
        <div className="biography-text-inner">
          <p>
            Umeh John is a talented and detail-oriented furniture specialist
            based in Lagos, with over 5 years of experience in designing and
            crafting high-quality furniture pieces. Known for his creativity and
            precision, he brings ideas to life—transforming spaces with
            furniture that is both functional and aesthetically pleasing.
          </p>
          <p>
            With a perfect 5.0 rating from over 1,130 satisfied clients, Umeh
            has earned a reputation for excellence, reliability, and consistent
            delivery. From modern home furniture to custom-made designs, every
            project is handled with care, ensuring durability, comfort, and
            style.
          </p>
          <p>
            His passion for craftsmanship and commitment to customer
            satisfaction set him apart, making him a trusted choice for
            furniture services across Lagos. Whether you're furnishing a new
            space or upgrading your current one, Umeh John delivers quality you
            can see and comfort you can feel.
          </p>
        </div>
      </article>

      {/* Booking Form Layout Block */}
      <section className="contact-form-layout-section">
        <div className="contact-container">
          {/* Interactive Form Controls */}
          <div className="contact-form-side">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group full-width">
                <input type="text" placeholder="Full Name" />
              </div>

              <div className="form-row">
                <div className="form-group half-width">
                  <input type="text" placeholder="City" />
                </div>
                <div className="form-group half-width">
                  <input type="text" placeholder="State" />
                </div>
              </div>

              <div className="form-group full-width">
                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="form-group full-width">
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-group full-width">
                <input type="text" placeholder="Address" />
              </div>

              <div className="form-group full-width">
                <input type="text" placeholder="Country" />
              </div>

              <div className="form-group full-width">
                <input type="text" placeholder="Postal Code" />
              </div>

              <div className="form-group full-width">
                <textarea placeholder="Message" rows="4"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Request
              </button>
            </form>
          </div>

          {/* Graphical Side Block Element */}
          <div className="contact-info-side">
            <p className="info-text">
              “Please fill out this form carefully to help us serve you better.”
            </p>
          </div>
        </div>
      </section>

      <HeroFooter />
    </div>
  );
};

export default AboutUbani;
