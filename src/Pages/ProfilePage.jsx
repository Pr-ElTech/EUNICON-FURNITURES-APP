import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiEdit2, FiUser } from "react-icons/fi";
import HeroHeader from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";
import EditInfoModal from "../Components/EditInfoModal";
import EditAddressModal from "../Components/EditAddress";
import "../Style/ProfilePage.css";

const ProfilePage = () => {
  const { userDetail } = useSelector((state) => state.user);

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    country: "",
    state: "",
    postalCode: "",
  });

  useEffect(() => {
    if (userDetail) {
      setProfileData({
        firstName: userDetail.firstName || "",
        lastName: userDetail.lastName || "",
        email: userDetail.email || "",
        phone: userDetail.phoneNumber || "",
        location: userDetail.state
          ? `Lekki, ${userDetail.state}, Nigeria`
          : "Lekki, Lagos, Nigeria",
        country: "Nigeria",
        state: userDetail.state || "",
        postalCode: userDetail.postalCode || "100001",
      });
    }
  }, [userDetail]);

  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handleUpdateInfo = (updatedFields) => {
    setProfileData((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  const handleUpdateAddress = (updatedAddress) => {
    setProfileData((prev) => ({
      ...prev,
      country: updatedAddress.country,
      state: updatedAddress.state,
      postalCode: updatedAddress.postalCode,
      location: `Lekki, ${updatedAddress.state}, ${updatedAddress.country}`,
    }));
  };

  return (
    <div className="profile-page-hull">
      <HeroHeader />

      <main className="profile-main-content">
        <div className="profile-card hero-identity-card">
          <div className="avatar-frame">
            <div className="avatar-icon-placeholder">
              <FiUser size={40} />
            </div>
          </div>
          <div className="identity-text-details">
            <h2>
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p>{profileData.location}</p>
          </div>
        </div>

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

        <div className="profile-card info-display-card">
          <div className="card-header-row">
            <h3>Address</h3>
            <button
              type="button"
              className="section-edit-btn"
              onClick={() => setIsAddressModalOpen(true)}
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

      <EditAddressModal
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
