import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/Service.css";
import Header from "../Components/HeroHeader";
import Cards from "../Components/ServiceCard";
import samuel from "../assets/directorsportrait/samuel (2).png";
import ProductCard from "../Components/ProductCard";
import HeroFooter from "../Components/HeroFooter";

const FurnitureService = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [chairProducts, setChairProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChairProducts = async () => {
      if (activeTab !== "service") return; // Only trigger network request when opening the service tab

      setLoading(true);
      setError(null);
      try {
        // Replace with your exact global products endpoint if different
        const response = await axios.get(
          "https://eunicon-furnitures-1.onrender.com/api/v1/products",
        );

        // Extracting data safely assuming standard API responses (adjust response.data paths if nested under a key)
        const allProducts = response.data?.products || response.data || [];

        // Filter out items belonging specifically to the chair collection and slice the first 4
        const chairs = allProducts
          .filter(
            (product) =>
              product.category?.toLowerCase() === "chair" ||
              product.collectionKey === "chair",
          )
          .slice(0, 4);

        setChairProducts(chairs);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChairProducts();
  }, [activeTab]);

  return (
    <div className="service_page_wrapper">
      <Header />

      <div className="artisan-showcase-container">
        <div className="inner_service_page">
          <Cards
            img={samuel}
            name="Umesh John"
            profession="Furniture"
            rating={5.0}
            experience={5}
            location="Lagos, Nigeria"
            showBtn={true}
          />
        </div>
      </div>

      <div className="tab-navigation-bar-container">
        <div className="tab-navigation-inner">
          <button
            type="button"
            className={`nav-tab-item ${activeTab === "about" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            type="button"
            className={`nav-tab-item ${activeTab === "service" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("service")}
          >
            Service
          </button>
          <button
            type="button"
            className={`nav-tab-item ${activeTab === "portfolio" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
        </div>
      </div>

      {activeTab === "about" && (
        <div className="biography-text-section">
          <div className="biography-text-inner">
            <p>
              Umeh John is a skilled furniture expert based in Lagos with over 5
              years of experience in designing and crafting high-quality,
              durable, and stylish furniture. With a 5.0 rating from over 1,130
              satisfied clients, he is trusted for delivering excellent results
              with precision and creativity.
            </p>
            <p>
              Custom furniture design, sofa and chair production, bed frames and
              bedroom furniture, furniture repairs, office furniture, and
              interior consultation — all tailored to fit your space and style.
            </p>
          </div>
        </div>
      )}

      {activeTab === "service" && (
        <div className="biography-text-section">
          <div className="biography-text-inner">
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1e293b",
                }}
              >
                Explore His Services
              </h3>
            </div>

            {loading && (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  color: "#64748b",
                }}
              >
                Loading available chair collections...
              </div>
            )}

            {error && (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  color: "#ef4444",
                }}
              >
                {error}
              </div>
            )}

            {!loading && !error && chairProducts.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  color: "#64748b",
                }}
              >
                No custom chair items found at this time.
              </div>
            )}

            {!loading && !error && chairProducts.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "24px",
                  width: "100%",
                }}
              >
                {chairProducts.map((item) => (
                  <ProductCard key={item.id || item._id} product={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "portfolio" && (
        <div className="biography-text-section">
          <div
            className="biography-text-inner"
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <p>
              Take a look at some of my recent works — each piece crafted with
              precision, creativity, and attention to detail. From modern
              designs to timeless classics, every project reflects quality and
              durability you can trust.
            </p>
            <p>
              Every furniture piece is carefully designed to match the client's
              space, style, and comfort needs. I focus not just on how it looks,
              but how it feels and lasts over time.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600"
                    alt="Before"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      background: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      padding: "6px 16px",
                      borderRadius: "4px",
                      fontWeight: "600",
                    }}
                  >
                    Before
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600"
                    alt="After"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      background: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      padding: "6px 16px",
                      borderRadius: "4px",
                      fontWeight: "600",
                    }}
                  >
                    After
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Every client is unique and so we make sure to work closely with
                our clients to design a space that suits each personality by
                actualizing the picture in their mind and making it a reality.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="contact-form-layout-section">
        <div className="contact-container">
          <div className="contact-form-side">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
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

              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Address" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Country" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Postal Code" />
              </div>

              <div className="form-group">
                <textarea placeholder="Message" rows="5"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Request
              </button>
            </form>
          </div>

          <div className="contact-info-side">
            <p className="info-text">
              “Please fill out this form carefully to help us serve you better.”
            </p>
          </div>
        </div>
      </div>

      <HeroFooter />
    </div>
  );
};

export default FurnitureService;
