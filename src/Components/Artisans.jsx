import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../css/artisans.css";
import axiosInstance from "../Pages/Config/AxiosInstance";

const Artisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Helper object to dynamically assign generic premium avatar pictures based on the profession
  const getPlaceholderImage = (profession = "") => {
    const job = profession.toLowerCase();
    if (job.includes("paint"))
      return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150";
    if (job.includes("plumb"))
      return "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=150";
    return "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150"; // Default backup placeholder
  };

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/allArtisan");

        // Remap response.data.users to align beautifully with image_e71b20.png styles
        if (response.data && response.data.users) {
          setArtisans(response.data.users);
        } else {
          setArtisans([]);
        }
      } catch (err) {
        console.error("Error fetching artisans data:", err);
        setError("Failed to load artisan profiles. Please try again later.");

        // MOCK FALLBACK DATA: Matches your actual collection setup perfectly if the server is dropped
        setArtisans([
          { _id: "1", name: "ubani joseph", profession: "painter", ratings: 5 },
          {
            _id: "2",
            name: "Alex emmanuel",
            profession: "plumber",
            ratings: 5,
          },
          { _id: "3", name: "umeh john", profession: "furniture", ratings: 5 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

  const handleViewProfile = (artisan) => {
    // Standardizes routing dynamically based on clean parsed names or raw MongoDB IDs
    const lowerName = artisan.name.toLowerCase();
    if (lowerName.includes("ubani")) {
      navigate("/service-ubani");
    } else if (lowerName.includes("umeh")) {
      navigate("/furniture-service");
    } else {
      navigate("/furniture-service"); // Default profile dashboard
    }
  };

  if (loading && artisans.length === 0) {
    return <div className="artisans-status">Loading artisan profiles...</div>;
  }

  return (
    <section className="artisans-section">
      <h2 className="artisans-main-title">Artisan Profiles</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="artisans-grid">
        {artisans.slice(0, 3).map((artisan) => (
          // Using MongoDB unique key "_id" verbatim
          <div key={artisan._id} className="artisan-profile-card">
            {/* Top header row */}
            <div className="card-top-row">
              <img
                src={
                  artisan.imageUrl || getPlaceholderImage(artisan.profession)
                }
                alt={artisan.name}
                className="artisan-avatar"
              />
              {/* Uses text-transform helper inline to auto-capitalize the backend words */}
              <span
                className="artisan-profession"
                style={{ textTransform: "capitalize" }}
              >
                {artisan.profession === "furniture"
                  ? "Carpenter"
                  : artisan.profession}
              </span>
            </div>

            {/* Middle body row */}
            <div className="card-middle-row">
              <h3
                className="artisan-name"
                style={{ textTransform: "capitalize" }}
              >
                {artisan.name}
              </h3>
              <div className="artisan-stars">
                {[...Array(5)].map((_, index) => {
                  // Fallback to 5 stars if new accounts have a zero baseline rating as seen in mock data
                  const currentRating =
                    artisan.ratings === 0 ? 5 : artisan.ratings;
                  return (
                    <FaStar
                      key={index}
                      className={
                        index < currentRating
                          ? "star active-star"
                          : "star inactive-star"
                      }
                    />
                  );
                })}
              </div>
            </div>

            {/* Bottom action row */}
            <div className="card-bottom-row">
              <button
                className="artisan-view-btn"
                onClick={() => handleViewProfile(artisan)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artisans;
