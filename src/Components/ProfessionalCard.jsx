import React from 'react';
import "../css/ProfessionalCard.css"

const ProfessionalCard = ({ 
  imageSrc, 
  name, 
  profession, 
  rating, 
  reviewCount, 
  experience, 
  location 
}) => {
  console.log(rating)
  return (
    <div className="prof-card-container">
      
      {/* Profile Image Section */}
      <div className="prof-card-image-wrapper">
        <img 
          src={imageSrc} 
          alt={`${name} - ${profession}`} 
          className="prof-card-img"
        />
      </div>

      {/* Details Section */}
      <div className="prof-card-details">
        <div className="prof-card-info-group">
          
          {/* Name */}
          <div className="prof-card-row">
            <span className="prof-card-label">Name:</span>
            <span className="prof-card-value">{name}</span>
          </div>

          {/* Profession */}
          <div className="prof-card-row">
            <span className="prof-card-label">Profession:</span>
            <span className="prof-card-value">{profession}</span>
          </div>

          {/* Ratings */}
          <div className="prof-card-row alignment-fix">
            <span className="prof-card-label">Ratings</span>
            <div className="prof-card-rating-value">
              <span className="prof-card-star">★</span>
              <span className="prof-card-value">{rating} ({reviewCount} reviews)</span>
            </div>
          </div>

          {/* Experience */}
          <div className="prof-card-row">
            <span className="prof-card-label">Experience</span>
            <span className="prof-card-value">{experience}</span>
          </div>

          {/* Location */}
          <div className="prof-card-row">
            <span className="prof-card-label">Location</span>
            <span className="prof-card-value">{location}</span>
          </div>
          
        </div>

        {/* Action Buttons */}
        <div className="prof-card-actions">
          <button className="prof-btn btn-hire">Hire Now</button>
          <button className="prof-btn btn-message">Message</button>
        </div>
      </div>

    </div>
  );
};

export default ProfessionalCard;