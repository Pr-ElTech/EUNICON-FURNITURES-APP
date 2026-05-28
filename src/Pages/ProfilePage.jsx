import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";
import EditInfoModal from "../Components/EditInfoModal";
import EditAddressModal from "../Components/EditAddress"; // Newly imported component hook
import "../Style/ProfilePage.css";
import EditAdress from "../Components/EditAddress";
// import UserAvatarImg from "../Assets/user-avatar.jpg";

const ProfilePage = () => {
  // Separate Modal Control Switches
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  // Consolidated User Profile Context State
  const [profileData, setProfileData] = useState({
    firstName: "Sonayon",
    lastName: "Peculiar",
    email: "peculiarsonayon01@gmail.com",
    phone: "070 700 626 87",
    location: "Lekki, Lagos, Nigeria",
    country: "Nigeria",
    state: "Lagos State",
    postalCode: "100001",
  });

  // Handler for core biographical fields update
  const handleUpdateInfo = (updatedFields) => {
    setProfileData((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  // Handler for address location grid values update
  const handleUpdateAddress = (updatedAddress) => {
    setProfileData((prev) => ({
      ...prev,
      country: updatedAddress.country,
      state: updatedAddress.state,
      postalCode: updatedAddress.postalCode,
      // Keeps hero banner header summary in sync with state changes
      location: `Lekki, ${updatedAddress.state}, ${updatedAddress.country}`,
    }));
  };

  return (
    <div className="profile-page-hull">
      <HeroHeader />

      <main className="profile-main-content">
        {/* ==========================================
           CARD 1: MAIN USER IDENTITY BANNER
           ========================================== */}
        <div className="profile-card hero-identity-card">
          <div className="avatar-frame">
            <img src="={UserAvatarImg}" alt="User Avatar Display" />
          </div>
          <div className="identity-text-details">
            <h2>
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p>{profileData.location}</p>
          </div>
        </div>

        {/* ==========================================
           CARD 2: PERSONAL INFORMATION DISPLAY
           ========================================== */}
        <div className="profile-card info-display-card">
          <div className="card-header-row">
            <h3>Personal Information</h3>
            <button
              type="button"
              className="section-edit-btn"
              onClick={() => setIsInfoModalOpen(true)}
            >
              <FiEdit2 size={14} /> Edit
            </button>
          </div>

          <div className="info-data-grid">
            <div className="info-block">
              <span className="info-label">First Name</span>
              <span className="info-value">{profileData.firstName}</span>
            </div>
            <div className="info-block">
              <span className="info-label">Last Name</span>
              <span className="info-value">{profileData.lastName}</span>
            </div>
            <div className="info-block">
              <span className="info-label">Email address</span>
              <span className="info-value email-value">
                {profileData.email}
              </span>
            </div>
            <div className="info-block">
              <span className="info-label">Phone</span>
              <span className="info-value">{profileData.phone}</span>
            </div>
          </div>
        </div>

        {/* ==========================================
           CARD 3: ADDRESS SEGMENT PANEL
           ========================================== */}
        <div className="profile-card info-display-card">
          <div className="card-header-row">
            <h3>Address</h3>
            <button
              type="button"
              className="section-edit-btn"
              onClick={() => setIsAddressModalOpen(true)} // Now triggers address modal overlay
            >
              <FiEdit2 size={14} /> Edit
            </button>
          </div>

          <div className="info-data-grid">
            <div className="info-block">
              <span className="info-label">Country</span>
              <span className="info-value">{profileData.country}</span>
            </div>
            <div className="info-block">
              <span className="info-label">City/State</span>
              <span className="info-value">{profileData.state}</span>
            </div>
          </div>
        </div>
      </main>

      <HeroFooter />

      {/* MODAL 1: Personal Profile Info Editing Portal */}
      <EditInfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        initialData={{
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          email: profileData.email,
          phone: profileData.phone,
        }}
        onSave={handleUpdateInfo}
      />

      {/* MODAL 2: Physical Shipping Address Editing Portal */}
      <EditAdress
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        initialData={{
          country: profileData.country,
          state: profileData.state,
          postalCode: profileData.postalCode,
        }}
        onSave={handleUpdateAddress}
      />
    </div>
  );
};

export default ProfilePage;
